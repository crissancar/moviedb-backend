import { Request, Response, Router } from 'express';
import container from '../../../config/dependency-injection';
import { MoviePutController } from '../controllers/MoviePutController';
import { MovieGetController } from '../controllers/MovieGetController';

export function register(router: Router) {
  const moviePutController: MoviePutController = container.get('Movies.controllers.MoviePutController');
  router.put('/movies/:id', (req: Request, res: Response) => moviePutController.run(req, res));

  const movieGetController: MovieGetController = container.get('Movies.controllers.MovieGetController');
  router.get('/movies/:id', (req: Request, res: Response) => movieGetController.run(req, res));
}
