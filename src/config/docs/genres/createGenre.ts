export const createGenre = {
  tags: ['Genres'],
  description: 'Create or update a genre',
  operationId: 'createGenre',
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
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/createGenreRequest',
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

export const createGenreRequest = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Terror',
    },
  },
};
