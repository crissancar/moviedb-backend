import convict from 'convict';
import 'dotenv-flow/config';

const moviedbConfig = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'default',
    env: 'NODE_ENV',
  },
  themoviedatabase: {
    accessToken: {
      doc: 'The TMDB access token',
      format: String,
      env: 'TMDB_ACCESS_TOKEN',
      default: 'default',
    },
    apiKey: {
      doc: 'The TMDB api key',
      format: String,
      env: 'TMDB_API_KEY',
      default: 'default',
    },
  },
  mongo: {
    url: {
      doc: 'The Mongo connection URL',
      format: String,
      env: 'MONGO_URL',
      default: 'mongodb://localhost:27017/mooc-backend-dev',
    },
  },
});

moviedbConfig.loadFile([`${__dirname}/default.json`, `${__dirname}/${moviedbConfig.get('env')}.json`]);

export default moviedbConfig;
