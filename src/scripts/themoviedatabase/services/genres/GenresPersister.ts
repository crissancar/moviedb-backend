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

      this.printInformation(index, genresData);
    });
  }

  private printInformation(index: number, genresData: Array<Object>) {
    console.log(`Loading genres data from api and persisting in the database... ${index + 1} of ${genresData.length}`);

    if (index + 1 === genresData.length) console.log('\n\n---->  Press CTRL-C to exit  <-----');
  }
}
