import convict from 'convict';

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
      default: '',
    },
    apiKey: {
      doc: 'The TMDB api key',
      format: String,
      env: 'TMDB_API_KEY',
      default: '',
    },
  },
});

moviedbConfig.loadFile([`${__dirname}/default.json`, `${__dirname}/${moviedbConfig.get('env')}.json`]);

export default moviedbConfig;
