import { Movie } from '../models/Movie';
import { MovieRepository } from '../repositories/MovieRepository';
import { CreateMovieFromTMDBRequest } from '../dtos/CreateMovieFromTMDBRequest';

export class MovieCreatorFromTMDB {
  constructor(private repository: MovieRepository) {}

  async run(request: CreateMovieFromTMDBRequest): Promise<void> {
    const movie = Movie.createMovieFromTMDB(
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
