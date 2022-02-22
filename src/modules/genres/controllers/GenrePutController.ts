import { GenreCreator } from '../services/GenreCreator';
import { Controller } from '../../shared/controllers/Controller';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export class GenrePutController implements Controller {
  constructor(private genreCreator: GenreCreator) {}

  async run(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    const name: string = req.body.name;

    await this.genreCreator.run({ id, name });

    res.status(httpStatus.CREATED).send();
  }
}
