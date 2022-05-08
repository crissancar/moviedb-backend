import { MovieRepositoryMock } from '../__mocks__/MovieRepositoryMock';
import { MovieFinder } from '../../../../src/modules/movies/services/MovieFinder';
import { MovieMother } from '../mothers/MovieMother';

let repository: MovieRepositoryMock;
let finder: MovieFinder;

beforeEach(() => {
  repository = new MovieRepositoryMock();
  finder = new MovieFinder(repository);
});

describe('MovieFinder', () => {
  it('should find an existing movie', async () => {
    const expectedMovie = MovieMother.random();
    repository.whenSearchThenReturn(expectedMovie);

    const findedMovie = await finder.run(expectedMovie.id);
    await repository.assertLastSearchedMovieIs(expectedMovie.id);
  });
});
