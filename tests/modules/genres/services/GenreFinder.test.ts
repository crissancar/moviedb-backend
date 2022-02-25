import { GenreRepositoryMock } from '../__mocks__/GenreRepositoryMock';
import { GenreFinder } from '../../../../src/modules/genres/services/GenreFinder';
import { GenreMother } from '../mothers/GenreMother';

let repository: GenreRepositoryMock;
let finder: GenreFinder;

beforeEach(() => {
  repository = new GenreRepositoryMock();
  finder = new GenreFinder(repository);
});

describe('GenreFinder', () => {
  it('should find an existing genre', async () => {
    const expectedGenre = GenreMother.random();
    repository.whenSearchThenReturn(expectedGenre);

    const findedGenre = await finder.run(expectedGenre.id);
    await repository.assertLastSearchedGenreIs(expectedGenre.id);
  });
});
