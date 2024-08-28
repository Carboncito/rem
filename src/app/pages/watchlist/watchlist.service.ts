import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(private httpService: HttpClient) { }

  getWatchlist() {
    // return this.httpService.get('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
  }
}
