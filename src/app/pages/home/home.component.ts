import { Component, HostListener, OnInit } from '@angular/core';
import { CardVideoComponent, InputComponent } from '../../components';
import { ButtonComponent } from '../../components/button/button.component';
import { OmdbService, SearchOMDB, ToastService, Video } from '../../services';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Observer,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { CommonModule } from '@angular/common';
import { WatchlistService } from '../watchlist/watchlist.service';
import { Watchlist } from '../../models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    CardVideoComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  searchInput = new FormControl();
  data: Video[] = [];
  totalResults: number = 0;
  empty: boolean = false;
  error: boolean = false;
  loading: boolean = false;
  pageNumber = 1;
  private query = '';

  constructor(
    private omdbService: OmdbService,
    private watchlistService: WatchlistService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.pageNumber = 1;
    this.loading = true;
    this.totalResults = 0;
    this.searchInput.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => (this.loading = false)),
        switchMap((value: string) => {
          this.query = value;
          return this.omdbService.getMoviesBySearch(value);
        })
      )
      .subscribe({
        next: (data: SearchOMDB) => {
          this.data = data.Search;
          this.totalResults = Number(data.totalResults ?? '0');
          this.empty = data.Response !== 'True';
          this.error = false;
        },
        error: (error: any) => {
          this.error = true;
          console.log(error);
        },
      });
  }

  @HostListener('window:scroll', ['$event'])
  getScrollHeight() {
    const isValidScroll =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    const dataShowing = this.pageNumber * 10;
    const showMoreData = dataShowing <= this.totalResults;

    if (isValidScroll && !this.loading && showMoreData) {
      this.pageNumber += 1;
      this.loading = true;
      this.omdbService
        .getMoviesBySearch(this.query, this.pageNumber)
        .pipe(tap(() => (this.loading = false)))
        .subscribe({
          next: (data: SearchOMDB) => {
            this.data = [...this.data, ...data.Search];
            this.empty = data.Response !== 'True';
            this.error = false;
          },
          error: (error: any) => {
            this.error = true;
            console.log(error);
          },
        });
    }
  }

  addToWatchlist(video: Video) {
    const data = this.convertToWatchlist(video);
    this.watchlistService.addToWatchlist(data).subscribe({
      next: () => {
        this.toastService.show('Added to watchlist', 'success');
      },
      error: (error) => {
        const message = error?.error?.message[0] || error.message;
        this.toastService.show(message, 'danger');
      },
    });
  }

  convertToWatchlist(video: Video): Watchlist {
    return {
      title: video.Title,
      year: video.Year,
      videoId: video.imdbID,
      type: video.Type,
      poster: video.Poster,
    };
  }
}
