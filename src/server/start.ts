import { MovieDBBackendApp } from './MovieDBBackendApp';

try {
  new MovieDBBackendApp().start();
} catch (error) {
  console.log(error);
  process.exit(1);
}

process.on('uncaughtException', (error) => {
  console.log('uncaughtException', error);
  process.exit(1);
});
