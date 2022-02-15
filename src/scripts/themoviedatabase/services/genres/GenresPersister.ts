import { TMDBData } from '../../types/TMDBData';
import { GenreCreator } from '../../../../modules/genres/services/GenreCreator';

export class GenresPersister {
  private readonly genreCreator: GenreCreator;

  constructor(genreCreator: GenreCreator) {
    this.genreCreator = genreCreator;
  }

  public async run(genresData: TMDBData): Promise<void> {
    genresData.map(async (genre: any, index) => {
      const { id, name } = genre;

      await this.genreCreator.run({ id, name });

      console.log(
        `Loading genres data from api and persisting in the database... ${index + 1} of ${genresData.length}`
      );
    });
  }
}
