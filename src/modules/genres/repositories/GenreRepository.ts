import { Genre } from '../models/Genre';
import { Nullable } from '../../shared/types/Nullable';

export interface GenreRepository {
  save(genre: Genre): Promise<void>;
  search(id: string): Promise<Nullable<Genre>>;
}
