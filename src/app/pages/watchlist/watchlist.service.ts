import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Watchlist, WatchlistStored } from '../../models';
import { Video } from '../../services';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private url = environment.DEV
    ? `http://${document.location.hostname}:3000/user/watchlist`
    : 'http://localhost:3000/user/watchlist';
  constructor(private httpService: HttpClient) {}

  getWatchlist(): Observable<WatchlistStored[]> {
    return this.httpService.get<WatchlistStored[]>(this.url);
  }

  addToWatchlist(video: Watchlist): Observable<WatchlistStored[]> {
    return this.httpService.post<WatchlistStored[]>(this.url, video);
  }
}
