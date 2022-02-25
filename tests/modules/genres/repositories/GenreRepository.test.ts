import { GenreRepository } from '../../../../src/modules/genres/repositories/GenreRepository';
import container from '../../../../src/config/dependency-injection';
import { EnvironmentArranger } from '../../../shared/arranger/EnvironmentArranger';
import { GenreMother } from '../mothers/GenreMother';

const repository: GenreRepository = container.get('Genre.repositories.GenreRepository');
const environmentArranger: Promise<EnvironmentArranger> = container.get('Shared.EnvironmentArranger');

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
});

describe('GenreRepository', () => {
  describe('#save', () => {
    it('should save a genre', async () => {
      const genre = GenreMother.random();

      await repository.save(genre);
    });
  });

  describe('#search', () => {
    it('should return an existing genre', async () => {
      const expectedGenre = GenreMother.random();
      await repository.save(expectedGenre);

      const findedGenre = await repository.search(expectedGenre.id);

      expect(expectedGenre).toEqual(findedGenre);
    });

    it('should not return a non existing course', async () => {
      expect(await repository.search(GenreMother.random().id)).toBeFalsy();
    });
  });
});
