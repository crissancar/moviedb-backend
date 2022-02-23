import { GenreRepository } from '../repositories/GenreRepository';
import { Genre } from '../models/Genre';
import { CreateGenreRequest } from '../dtos/CreateGenreRequest';

export class GenreCreator {
  constructor(private repository: GenreRepository) {}

  async run(request: CreateGenreRequest): Promise<void> {
    const genre = new Genre(request.id, request.name);

    return this.repository.save(genre);
  }
}
