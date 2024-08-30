import { Component, OnInit } from '@angular/core';
import { WatchlistService } from './watchlist.service';
import { CardVideoComponent } from '../../components';
import { WatchlistStored } from '../../models';
import { ToastService } from '../../services';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CardVideoComponent],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css',
})
export class WatchlistComponent implements OnInit {
  watchlist: WatchlistStored[] = [];

  constructor(
    private watchlistService: WatchlistService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.watchlistService.getWatchlist().subscribe({
      next: (data) => {
        this.watchlist = data;
      },
      error: (error) => console.error(error),
    });
  }

  deleteVideo(videoId: string) {
    this.watchlistService.deleteVideo(videoId).subscribe({
      next: (data) => {
        this.watchlist = data;
        this.toastService.show('Video removed', 'success');
      },
      error: (error) => {
        const message = error?.error?.message[0] || error.message;
        this.toastService.show(message, 'danger');
      },
    });
  }
}
