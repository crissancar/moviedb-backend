import { Request, Response } from 'express';
import { MovieCreator } from '../services/MovieCreator';
import httpStatus from 'http-status';
import { CreateMovieRequest } from '../dtos/CreateMovieRequest';

export class MoviePutController {
  constructor(private movieCreator: MovieCreator) {}

  public async run(req: Request, res: Response) {
    const id: string = req.params.id;

    const {
      title,
      overview,
      genre_ids,
      release_date,
      popularity,
      vote_average,
      vote_count,
      poster_path,
    }: CreateMovieRequest = req.body;

    await this.movieCreator.run({
      id,
      title,
      overview,
      genre_ids,
      release_date,
      popularity,
      vote_average,
      vote_count,
      poster_path,
    });

    res.status(httpStatus.CREATED).send();
  }
}
