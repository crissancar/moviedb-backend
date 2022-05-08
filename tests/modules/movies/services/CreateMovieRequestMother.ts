import { CreateMovieRequest } from '../../../../src/modules/movies/dtos/CreateMovieRequest';
import { MovieIdMother } from '../mothers/MovieIdMother';
import { MovieTitleMother } from '../mothers/MovieTitleMother';
import { MovieOverviewMother } from '../mothers/MovieOverviewMother';
import { MovieReleaseDateMother } from '../mothers/MovieReleaseDateMother';
import { MovieGenreIdsMother } from '../mothers/MovieGenreIdsMother';
import { MoviePopularityMother } from '../mothers/MoviePopularityMother';
import { MovieVoteAverageMother } from '../mothers/MovieVoteAverageMother';
import { MovieVoteCountMother } from '../mothers/MovieVoteCountMother';
import { MoviePosterPathMother } from '../mothers/MoviePosterPathMother';

export class CreateMovieRequestMother {
  static create(
    id: string,
    title: string,
    overview: string,
    genre_ids: Array<string>,
    release_date: string,
    popularity: number,
    vote_average: number,
    vote_count: number,
    poster_path: string
  ) {
    return {
      id: id,
      title: title,
      overview: overview,
      genre_ids: genre_ids,
      release_date: release_date,
      popularity: popularity,
      vote_average: vote_average,
      vote_count: vote_count,
      poster_path: poster_path,
    };
  }

  static random(): CreateMovieRequest {
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
