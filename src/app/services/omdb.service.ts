import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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

  private fullUrl = environment.OMDB_FULL_URL;

  getMoviesBySearch(query: string): Observable<SearchOMDB> {
    const s = `&s=${query}`;
    return this.httService.get<SearchOMDB>(this.fullUrl + s);
  }
}
