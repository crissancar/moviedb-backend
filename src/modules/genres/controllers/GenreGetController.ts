import { Controller } from '../../shared/controllers/Controller';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { GenreFinder } from '../services/GenreFinder';
import { GenreNotExists } from '../exceptions/GenreNotExists';

export class GenreGetController implements Controller {
  constructor(private finder: GenreFinder) {}

  async run(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;

    try {
      const genre = await this.finder.run(id);

      res.status(httpStatus.OK).send(genre);
    } catch (e) {
      if (e instanceof GenreNotExists) {
        res.status(httpStatus.NOT_FOUND).send();
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
      }
    }
  }
}
