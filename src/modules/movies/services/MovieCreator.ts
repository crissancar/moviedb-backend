import { Movie } from '../models/Movie';
import { MovieRepository } from '../repositories/MovieRepository';
import { CreateMovieRequest } from '../dtos/CreateMovieRequest';

export class MovieCreator {
  constructor(private repository: MovieRepository) {}

  async run(request: CreateMovieRequest): Promise<void> {
    const movie = new Movie(
      request.id,
      request.title,
      request.overview,
      request.genre_ids,
      request.release_date,
      request.popularity,
      request.vote_average,
      request.vote_count,
      request.poster_path
    );

    return await this.repository.save(movie);
  }
}
