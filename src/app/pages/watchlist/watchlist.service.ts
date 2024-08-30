import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watchlist, WatchlistStored } from '../../models';
import { getPath } from '../../utils';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private url = getPath() + '/user/watchlist';

  constructor(private httpService: HttpClient) {}

  getWatchlist(): Observable<WatchlistStored[]> {
    return this.httpService.get<WatchlistStored[]>(this.url);
  }

  addToWatchlist(video: Watchlist): Observable<WatchlistStored[]> {
    return this.httpService.post<WatchlistStored[]>(this.url, video);
  }

  deleteVideo(videoId: string): Observable<WatchlistStored[]> {
    return this.httpService.delete<WatchlistStored[]>(this.url + `/${videoId}`);
  }
}
