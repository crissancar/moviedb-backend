import { MovieRepository } from '../../../../src/modules/movies/repositories/MovieRepository';
import container from '../../../../src/config/dependency-injection';
import { EnvironmentArranger } from '../../../shared/arranger/EnvironmentArranger';
import { MovieMother } from '../mothers/MovieMother';

const repository: MovieRepository = container.get('Movies.repositories.MovieRepository');
const environmentArranger: Promise<EnvironmentArranger> = container.get('Shared.EnvironmentArranger');

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
});

describe('MovieRepository', () => {
  describe('#save', () => {
    it('should save a movie', async () => {
      const movie = MovieMother.random();

      await repository.save(movie);
    });
  });

  describe('#search', () => {
    it('should return an existing movie', async () => {
      const expectedMovie = MovieMother.random();
      await repository.save(expectedMovie);

      const findedMovie = await repository.search(expectedMovie.id);

      expect(expectedMovie).toEqual(findedMovie);
    });

    it('should not return a non existing movie', async () => {
      expect(await repository.search(MovieMother.random().id)).toBeFalsy();
    });
  });
});
