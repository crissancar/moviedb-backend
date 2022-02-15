import { MovieDBBackendApp } from '../../server/MovieDBBackendApp';
import { TheMovieDatabaseGenresController } from './services/genres/TheMovieDatabaseGenresController';

const application: MovieDBBackendApp = new MovieDBBackendApp();
const theMovieDatabaseGenresController: TheMovieDatabaseGenresController = new TheMovieDatabaseGenresController();

function status() {
  console.log('themoviedatabase.script');
}

async function run(scriptName: string) {
  await startApplication();

  await scriptFactory(scriptName);

  await stopApplication();
}

async function startApplication(): Promise<void> {
  await application.start();
}

async function scriptFactory(scriptName: string) {
  if (scriptName === 'genres') await theMovieDatabaseGenresController.run();
}

async function stopApplication() {
  await application.stop();
}

export { status, run };
