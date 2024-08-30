import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getPath } from '../utils';

export interface SearchOMDB {
  Search: Video[];
  totalResults: string;
  Response: string;
}

export interface Video {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

@Injectable({
  providedIn: 'root',
})
export class OmdbService {
  constructor(private httService: HttpClient) {}
  private url = getPath() + '/omdb';

  getMoviesBySearch(query: string): Observable<SearchOMDB> {
    const s = `?s=${query}`;
    return this.httService.get<SearchOMDB>(this.url + s);
  }
}
