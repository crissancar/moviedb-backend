import { Request, Response, Router } from 'express';
import { StatusGetController } from '../controllers/StatusGetController';
import container from '../../../config/dependency-injection/awilix/awilix.config';

export function register(router: Router) {
  const statusGetController: StatusGetController = container.resolve('statusGetController');

  router.get('/status', (req: Request, res: Response) => statusGetController.run(req, res));
}
