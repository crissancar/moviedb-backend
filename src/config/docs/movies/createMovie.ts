export const createMovieFromTMDB = {
  tags: ['Movies'],
  description: 'Create or update a movie from TheMovieDatabase API',
  operationId: 'createMovieFromTMDB',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'Movie ID',
      required: true,
      type: 'string',
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/createMovieFromTMDBRequest',
        },
      },
    },
    required: true,
  },
  responses: {
    '201': {
      description: 'Created',
    },
  },
};

export const createMovieFromTMDBRequest = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      example: 'Sonic 2: La Película',
    },
    overview: {
      type: 'string',
      example:
        'Después de establecerse en Green Hills, Sonic se muere por demostrar que tiene madera de auténtico héroe, pero Robotnik regresa con nuevo compañero Knuckles, en busca de una esmeralda que tiene el poder de destruir civilizaciones, pero Sonic no esta solo lo ayudara Tails.',
    },
    genre_ids: {
      type: ['string'],
      example: ['28', '878', '35', '10751', '12'],
    },
    release_date: {
      type: 'string',
      example: '2022-03-30',
    },
    popularity: {
      type: 'number',
      example: 14189.164,
    },
    vote_average: {
      type: 'number',
      example: 8.1,
    },
    vote_count: {
      type: 'number',
      example: 25,
    },
    poster_path: {
      type: 'string',
      example: '/tAECviEBRWNQb2Q0ykJMyQrvKmp.jpg',
    },
  },
};
