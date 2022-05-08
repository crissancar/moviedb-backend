import { MongooseRepository } from '../../../shared/persistence/mongoose/MongooseRepository';
import { Movie } from '../../models/Movie';
import { MovieRepository } from '../../repositories/MovieRepository';
import { Model } from 'mongoose';
import { MongooseMovieModel } from './MongooseMovieModel';
import { Nullable } from '../../../shared/types/Nullable';

export class MongooseMovieRepository extends MongooseRepository<Movie> implements MovieRepository {
  public async save(movie: Movie): Promise<void> {
    const id = movie.id;

    await this.persist(id, movie);
  }

  public async search(id: string): Promise<Nullable<Movie>> {
    const movie: any = await this.model().findById(id);

    return movie ? Movie.fromPlainData({ ...movie._doc, id: id }) : null;
  }

  protected model(): Model<Movie> {
    return MongooseMovieModel;
  }
}
