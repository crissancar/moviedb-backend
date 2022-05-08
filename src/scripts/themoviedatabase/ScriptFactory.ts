import { TheMovieDatabaseGenresController } from './controllers/genres/TheMovieDatabaseGenresController';
import { TheMovieDatabaseMoviesController } from './controllers/movies/TheMovieDatabaseMoviesController';
import container from '../../config/dependency-injection';

export class ScriptFactory {
  private theMovieDatabaseGenresController: TheMovieDatabaseGenresController;
  private theMovieDatabaseMoviesController: TheMovieDatabaseMoviesController;

  constructor(scriptName: string) {
    this.theMovieDatabaseGenresController = container.get('Genres.controllers.TheMovieDatabaseGenresController');
    this.theMovieDatabaseMoviesController = container.get('Movies.controllers.TheMovieDatabaseMoviesController');

    this.runScript(scriptName).then();
  }

  public async runScript(scriptName: string) {
    if (scriptName === 'genres') await this.theMovieDatabaseGenresController.run();
    if (scriptName === 'movies') await this.theMovieDatabaseMoviesController.run();
  }
}
