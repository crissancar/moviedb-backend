import { TMDBData } from '../../types/TMDBData';

export class MoviesModeler {
  public async run(allMoviesData: TMDBData): Promise<TMDBData> {
    let modelatedMovie, modelatedMoviesData: TMDBData;

    modelatedMoviesData = allMoviesData.map((movie: any) => {
      modelatedMovie = this.modelateData(movie);

      return modelatedMovie;
    });

    return modelatedMoviesData;
  }

  private modelateData(movie: any) {
    let { id, title, overview, genre_ids, release_date, popularity, vote_average, vote_count, poster_path } = movie;

    const modelatedMovie = {
      id: this.convertIdToString(id),
      title,
      overview,
      genre_ids: this.convertGenreIdsToString(genre_ids),
      release_date,
      popularity,
      vote_average,
      vote_count,
      poster_path,
    };

    return modelatedMovie;
  }

  private convertIdToString(id: number): string {
    return id.toString();
  }

  private convertGenreIdsToString(genre_ids: Array<number>) {
    return genre_ids.map(String);
  }
}
