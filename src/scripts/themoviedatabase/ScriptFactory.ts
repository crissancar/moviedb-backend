import { TheMovieDatabaseGenresController } from './controllers/genres/TheMovieDatabaseGenresController';
import container from '../../config/dependency-injection';

export class ScriptFactory {
  private theMovieDatabaseGenresController: TheMovieDatabaseGenresController;

  constructor(scriptName: string) {
    this.theMovieDatabaseGenresController = container.get('Genres.controllers.TheMovieDatabaseGenresController');
    this.runScript(scriptName);
  }

  public async runScript(scriptName: string) {
    if (scriptName === 'genres') await this.theMovieDatabaseGenresController.run();
  }
}
