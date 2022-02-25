import { MongooseRepository } from '../../../shared/persistence/mongoose/MongooseRepository';
import { GenreRepository } from '../../repositories/GenreRepository';
import { Genre } from '../../models/Genre';
import { MongooseGenreModel } from './MongooseGenreModel';
import { Model } from 'mongoose';
import { Nullable } from '../../../shared/types/Nullable';

export class MongooseGenreRepository extends MongooseRepository<Genre> implements GenreRepository {
  async save(genre: Genre): Promise<void> {
    const id = genre.id.valueOf();

    await this.persist(id, genre);
  }

  public async search(id: string): Promise<Nullable<Genre>> {
    const genre: any = await this.model().findById(id);

    return genre ? Genre.fromPlainData({ ...genre._doc, id: id }) : null;
  }

  protected model(): Model<Genre> {
    return MongooseGenreModel;
  }
}
