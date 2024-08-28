import { Component, OnInit } from '@angular/core';
import { CardVideoComponent, InputComponent } from '../../components';
import { ButtonComponent } from '../../components/button/button.component';
import { OmdbService, Video } from '../../services';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

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

  constructor(private omdbService: OmdbService) {}

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
}
