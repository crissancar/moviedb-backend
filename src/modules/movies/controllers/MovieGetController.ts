import { Request, Response } from 'express';
import { MovieFinder } from '../services/MovieFinder';
import { MovieNotExists } from '../exceptions/MovieNotExists';
import httpStatus from 'http-status';

export class MovieGetController {
  constructor(private movieFinder: MovieFinder) {}

  public async run(req: Request, res: Response) {
    const id: string = req.params.id;

    try {
      const movie = await this.movieFinder.run(id);

      res.status(httpStatus.OK).send(movie);
    } catch (e) {
      if (e instanceof MovieNotExists) {
        res.status(httpStatus.NOT_FOUND).send();
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
      }
    }
  }
}
