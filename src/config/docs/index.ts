import { createGenre, createGenreBody } from './genres/createGenre';
import { healthCheck } from './status/healthCheck';

export const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'MovieDB REST API - Documentation',
    contact: {
      name: 'Cristian Sánchez',
      email: 'cristiansanchezcarr@gmail.com',
      url: 'https://github.com/crissancar',
    },
  },
  servers: [
    {
      url: 'http://localhost:5000/api/v1/docs',
      description: 'Local Server',
    },
    {
      url: 'https://api.mysite.com',
      description: 'Production Server',
    },
  ],
  tags: [
    {
      name: 'Genres',
    },
  ],
  paths: {
    status: {
      get: healthCheck,
    },
    'genres/{id}': {
      put: createGenre,
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      createGenreBody,
    },
  },
};
