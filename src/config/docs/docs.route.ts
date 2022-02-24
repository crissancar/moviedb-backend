import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { apiDocumentation } from './index';

export function register(router: Router) {
  router.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
}
