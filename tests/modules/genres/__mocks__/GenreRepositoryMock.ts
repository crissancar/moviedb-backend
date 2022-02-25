import { GenreRepository } from '../../../../src/modules/genres/repositories/GenreRepository';
import { Genre } from '../../../../src/modules/genres/models/Genre';
import { Nullable } from '../../../../src/modules/shared/types/Nullable';

export class GenreRepositoryMock implements GenreRepository {
  private mockSave = jest.fn();
  private mockSearch = jest.fn();

  async save(genre: Genre): Promise<void> {
    this.mockSave(genre);
  }

  assertLastSavedGenreIs(expected: Genre): void {
    const mock = this.mockSave.mock;
    const lastSavedGenre = mock.calls[mock.calls.length - 1][0] as Genre;

    expect(lastSavedGenre).toBeInstanceOf(Genre);
    expect(lastSavedGenre.id).toEqual(expected.id);
  }

  async search(id: string): Promise<Nullable<Genre>> {
    return this.mockSearch(id);
  }

  whenSearchThenReturn(value: Nullable<Genre>): void {
    this.mockSearch.mockReturnValue(value);
  }

  assertSearch() {
    expect(this.mockSearch).toHaveBeenCalled();
  }

  assertLastSearchedGenreIs(id: string): void {
    expect(this.mockSearch).toHaveBeenCalledWith(id);
  }
}
