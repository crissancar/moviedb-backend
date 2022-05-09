import { createGenre, createGenreRequest } from './genres/createGenre';
import { healthCheck } from './status/healthCheck';
import { findGenre, findGenreResponse } from './genres/findGenre';

export const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'MovieDB REST API - Documentation',
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Local Server',
    },
    {
      url: 'https://api.mysite.com',
      description: 'Production Server',
    },
  ],
  paths: {
    '/status': {
      get: healthCheck,
    },
    '/genres/{id}': {
      put: createGenre,
      get: findGenre,
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
      createGenreRequest,
      findGenreResponse,
    },
  },
};
