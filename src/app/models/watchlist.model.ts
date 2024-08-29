export interface Watchlist {
  videoId: string;
  title: string;
  year: string;
  type: string;
  poster: string;
}

export interface WatchlistStored extends Watchlist {
  _id: string;
  createdAt: string;
}
