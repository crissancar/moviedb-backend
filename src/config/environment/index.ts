import convict from 'convict';

const moviedbConfig = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'default',
    env: 'NODE_ENV',
  },
});

moviedbConfig.loadFile([`${__dirname}/default.json`, `${__dirname}/${moviedbConfig.get('env')}.json`]);

export default moviedbConfig;
