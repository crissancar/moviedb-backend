import { GenreRepository } from './GenreRepository';
import { Genre } from '../models/Genre';
import { Nullable } from '../../shared/types/Nullable';

export class InMemoryGenreRepository implements GenreRepository {
  async save(genre: Genre): Promise<void> {
    return console.log(genre);
  }

  async search(id: string): Promise<Nullable<Genre>> {
    return null;
  }
}
