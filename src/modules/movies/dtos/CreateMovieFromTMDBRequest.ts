export interface CreateMovieFromTMDBRequest {
  id: string;
  title: string;
  overview: string;
  genre_ids: Array<string>;
  release_date: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  poster_path: string;
}
