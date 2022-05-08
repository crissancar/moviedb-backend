import { MovieRepositoryMock } from '../__mocks__/MovieRepositoryMock';
import { MovieCreator } from '../../../../src/modules/movies/services/MovieCreator';
import { CreateMovieRequestMother } from './CreateMovieRequestMother';
import { MovieMother } from '../mothers/MovieMother';

let repository: MovieRepositoryMock;
let creator: MovieCreator;

beforeEach(() => {
  repository = new MovieRepositoryMock();
  creator = new MovieCreator(repository);
});

describe('MovieCreator', () => {
  it('should create a valid movie', async () => {
    const request = CreateMovieRequestMother.random();

    const movie = MovieMother.fromRequest(request);

    await creator.run(request);

    repository.assertLastSavedMovieIs(movie);
  });
});
