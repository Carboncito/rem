import { Component, OnInit } from '@angular/core';
import { WatchlistService } from './watchlist.service';
import { CardVideoComponent } from '../../components';
import { WatchlistStored } from '../../models';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CardVideoComponent],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css',
})
export class WatchlistComponent implements OnInit {
  watchlist: WatchlistStored[] = [];

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit(): void {
    this.watchlistService.getWatchlist().subscribe({
      next: (data) => {
        this.watchlist = data;
      },
      error: (error) => console.error(error),
    });
  }
}
