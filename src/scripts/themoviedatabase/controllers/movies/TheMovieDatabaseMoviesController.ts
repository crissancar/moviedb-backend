import { TheMovieDatabaseConfig } from '../../TheMovieDatabaseConfig';
import { Controller } from '../../../../modules/shared/controllers/Controller';
import { MoviesGetter } from '../../services/movies/MoviesGetter';
import { MoviesModeler } from '../../services/movies/MoviesModeler';
import { MoviesPersister } from '../../services/movies/MoviesPersister';

export class TheMovieDatabaseMoviesController extends TheMovieDatabaseConfig implements Controller {
  private readonly moviesGetter: MoviesGetter;
  private readonly moviesModeler: MoviesModeler;
  private readonly moviesPersister: MoviesPersister;

  constructor(moviesGetter: MoviesGetter, moviesModeler: MoviesModeler, moviesPersister: MoviesPersister) {
    super();
    this.moviesGetter = moviesGetter;
    this.moviesModeler = moviesModeler;
    this.moviesPersister = moviesPersister;
  }

  public async run() {
    const moviesData = await this.moviesGetter.run();

    const modelatedMoviesData = await this.moviesModeler.run(moviesData);

    await this.moviesPersister.run(modelatedMoviesData);
  }
}
