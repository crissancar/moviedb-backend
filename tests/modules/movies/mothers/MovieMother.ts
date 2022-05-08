import { Movie } from '../../../../src/modules/movies/models/Movie';
import { MovieIdMother } from './MovieIdMother';
import { MovieTitleMother } from './MovieTitleMother';
import { CreateMovieRequest } from '../../../../src/modules/movies/dtos/CreateMovieRequest';
import { MovieOverviewMother } from './MovieOverviewMother';
import { MovieGenreIdsMother } from './MovieGenreIdsMother';
import { MovieReleaseDateMother } from './MovieReleaseDateMother';
import { MoviePopularityMother } from './MoviePopularityMother';
import { MovieVoteAverageMother } from './MovieVoteAverageMother';
import { MovieVoteCountMother } from './MovieVoteCountMother';
import { MoviePosterPathMother } from './MoviePosterPathMother';

export class MovieMother {
  static create(
    id: string,
    title: string,
    overview: string,
    genre_ids: Array<string>,
    release_date: string,
    popularity: number,
    vote_averange: number,
    vote_count: number,
    poster_path: string
  ) {
    return new Movie(id, title, overview, genre_ids, release_date, popularity, vote_averange, vote_count, poster_path);
  }

  static fromRequest(request: CreateMovieRequest): Movie {
    return this.create(
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
  }

  static random(): Movie {
    return this.create(
      MovieIdMother.random(),
      MovieTitleMother.random(),
      MovieOverviewMother.random(),
      MovieGenreIdsMother.random(),
      MovieReleaseDateMother.random(),
      MoviePopularityMother.random(),
      MovieVoteAverageMother.random(),
      MovieVoteCountMother.random(),
      MoviePosterPathMother.random()
    );
  }
}
