import { Movie } from '../../../modules/movies/models/Movie';

export const findMovie = {
  tags: ['Movies'],
  description: 'Find a movie',
  operationId: 'findMovie',
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
  responses: {
    '200': {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/findMovieResponse',
          },
        },
        required: true,
      },
    },
  },
};

export const findMovieResponse = {
  type: Movie,
  properties: {
    id: {
      type: 'string',
      example: '675353',
    },
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
