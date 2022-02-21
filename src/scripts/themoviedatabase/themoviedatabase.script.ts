import { MovieDBBackendApp } from '../../server/MovieDBBackendApp';
import { ScriptFactory } from './ScriptFactory';

const application: MovieDBBackendApp = new MovieDBBackendApp();

function status() {
  console.log('themoviedatabase.script');
}

async function run(scriptName: string) {
  await startApplication();

  await new ScriptFactory(scriptName);

  await stopApplication();
}

async function startApplication(): Promise<void> {
  await application.start();
}

async function stopApplication() {
  await application.stop();
}

export { status, run };
