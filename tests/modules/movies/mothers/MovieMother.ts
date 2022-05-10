import { Movie } from '../../../../src/modules/movies/models/Movie';
import { MovieIdMother } from './MovieIdMother';
import { MovieTitleMother } from './MovieTitleMother';
import { CreateMovieRequest } from '../../../../src/modules/movies/dtos/CreateMovieRequest';
import { MovieOverviewMother } from './MovieOverviewMother';
import { MovieGenreIdsMother } from './MovieGenreIdsMother';
import { MovieReleaseDateMother } from './MovieReleaseDateMother';
import { MoviePosterPathMother } from './MoviePosterPathMother';

export class MovieMother {
  static create(
    id: string,
    title: string,
    overview: string,
    genre_ids: Array<string>,
    release_date: string,
    poster_path: string
  ) {
    return Movie.createMovie(id, title, overview, genre_ids, release_date, poster_path);
  }

  static fromRequest(request: CreateMovieRequest): Movie {
    return this.create(
      request.id,
      request.title,
      request.overview,
      request.genre_ids,
      request.release_date,
      request.poster_path
    );
  }

  static random(): Movie {
    return this.create(
      MovieIdMother.random(),
      MovieTitleMother.random(),
      MovieOverviewMother.random(),
      MovieGenreIdsMother.random(),
      MovieReleaseDateMother.random(),
      MoviePosterPathMother.random()
    );
  }
}
