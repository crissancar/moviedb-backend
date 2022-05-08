import { MovieRepository } from '../../../../src/modules/movies/repositories/MovieRepository';
import { Movie } from '../../../../src/modules/movies/models/Movie';
import { Nullable } from '../../../../src/modules/shared/types/Nullable';

export class MovieRepositoryMock implements MovieRepository {
  private mockSave = jest.fn();
  private mockSearch = jest.fn();

  async save(movie: Movie): Promise<void> {
    this.mockSave(movie);
  }

  assertLastSavedMovieIs(expected: Movie): void {
    const mock = this.mockSave.mock;
    const lastSavedMovie = mock.calls[mock.calls.length - 1][0] as Movie;

    expect(lastSavedMovie).toBeInstanceOf(Movie);
    expect(lastSavedMovie.id).toEqual(expected.id);
  }

  async search(id: string): Promise<Nullable<Movie>> {
    return this.mockSearch(id);
  }

  whenSearchThenReturn(value: Nullable<Movie>): void {
    this.mockSearch.mockReturnValue(value);
  }

  assertSearch() {
    expect(this.mockSearch).toHaveBeenCalled();
  }

  assertLastSearchedMovieIs(id: string): void {
    expect(this.mockSearch).toHaveBeenCalledWith(id);
  }
}
