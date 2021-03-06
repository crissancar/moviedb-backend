export interface CreateMovieRequest {
  id: string;
  title: string;
  overview: string;
  genre_ids: Array<string>;
  release_date: string;
  poster_path: string;
}
