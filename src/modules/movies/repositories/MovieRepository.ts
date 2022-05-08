import { Movie } from '../models/Movie';
import { Nullable } from '../../shared/types/Nullable';

export interface MovieRepository {
  save(movie: Movie): Promise<void>;
  search(id: string): Promise<Nullable<Movie>>;
}
