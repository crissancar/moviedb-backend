import { MovieRepository } from '../repositories/MovieRepository';
import { MovieNotExists } from '../exceptions/MovieNotExists';

export class MovieFinder {
  constructor(private repository: MovieRepository) {}

  public async run(id: string) {
    const movie = await this.repository.search(id);

    if (!movie) {
      throw new MovieNotExists();
    }

    return movie;
  }
}
