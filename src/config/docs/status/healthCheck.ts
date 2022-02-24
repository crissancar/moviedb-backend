export const healthCheck = {
  tags: ['Status'],
  description: 'Health check of the REST API status',
  operationId: 'healthCheck',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'OK',
    },
  },
};
