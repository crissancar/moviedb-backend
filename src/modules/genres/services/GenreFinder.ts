import { GenreRepository } from '../repositories/GenreRepository';
import { GenreNotExists } from '../exceptions/GenreNotExists';
import { FindGenreResponse } from '../dtos/FindGenreResponse';

export class GenreFinder {
  constructor(private repository: GenreRepository) {}

  async run(id: string) {
    const genre = await this.repository.search(id);

    if (!genre) {
      throw new GenreNotExists();
    }

    return new FindGenreResponse(genre.id, genre.name);
  }
}
