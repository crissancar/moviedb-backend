import { Genre } from '../../../modules/genres/models/Genre';

export const findGenre = {
  tags: ['Genres'],
  description: 'Find a genre',
  operationId: 'findGenre',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'Genre ID',
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
            $ref: '#/components/schemas/findGenreResponse',
          },
        },
        required: true,
      },
    },
  },
};

export const findGenreResponse = {
  type: Genre,
  properties: {
    id: {
      type: 'string',
      example: '32d4c17e-c070-4456-a6be-31bc21cc264d',
    },
    name: {
      type: 'string',
      example: 'Acción',
    },
  },
};
