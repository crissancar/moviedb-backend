import { TMDBData } from '../../types/TMDBData';
import { MovieCreatorFromTMDB } from '../../../../modules/movies/services/MovieCreatorFromTMDB';

export class MoviesPersister {
  private readonly movieCreator: MovieCreatorFromTMDB;

  constructor(movieCreator: MovieCreatorFromTMDB) {
    this.movieCreator = movieCreator;
  }

  public async run(moviesData: TMDBData): Promise<void> {
    moviesData.map(async (movie: any, index) => {
      await this.movieCreator.run(movie);

      this.printInformation(index, moviesData);
    });
  }

  private printInformation(index: number, moviesData: TMDBData) {
    console.log(`Loading movies data from api and persisting in the database... ${index + 1} of ${moviesData.length}`);

    if (index + 1 === moviesData.length) console.log('\n\n---->  Press CTRL-C to exit  <-----');
  }
}
