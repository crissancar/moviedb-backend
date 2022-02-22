import { Request, Response, Router } from 'express';
import container from '../../../config/dependency-injection';
import { GenrePutController } from '../controllers/GenrePutController';

export function register(router: Router) {
  const genrePutController: GenrePutController = container.get('Genres.controllers.GenrePutController');

  router.put('/genres/:id', (req: Request, res: Response) => genrePutController.run(req, res));
}
