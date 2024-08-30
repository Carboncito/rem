import { Component, OnInit } from '@angular/core';
import { CardVideoComponent, InputComponent } from '../../components';
import { ButtonComponent } from '../../components/button/button.component';
import { OmdbService, ToastService, Video } from '../../services';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
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
  data?: Video[] = [];
  totalResults?: string;
  empty: boolean = false;
  error: boolean = false;

  constructor(
    private omdbService: OmdbService,
    private watchlistService: WatchlistService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((value: string) => this.omdbService.getMoviesBySearch(value))
      )
      .subscribe({
        next: (data) => {
          this.data = data.Search;
          this.totalResults = data.totalResults;
          this.empty = data.Response !== 'True';
          this.error = false;
        },
        error: (error) => {
          this.error = true;
          console.log(error);
        },
      });
  }

  addToWatchlist(video: Video) {
    const data = this.convertToWatchlist(video);
    this.watchlistService.addToWatchlist(data).subscribe({
      next: (data) => {
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
