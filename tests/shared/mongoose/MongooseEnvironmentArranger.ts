import { EnvironmentArranger } from '../arranger/EnvironmentArranger';
import mongoose from 'mongoose';
import { MongooseClient } from '../../../src/modules/shared/persistence/mongoose/types/MongooseClient';

type MongooseCollections = mongoose.AnyObject;

export class MongooseEnvironmentArranger extends EnvironmentArranger {
  constructor(private _client: Promise<MongooseClient>) {
    super();
  }

  public async arrange(): Promise<void> {
    await this.cleanDatabase();
  }

  protected async cleanDatabase(): Promise<void> {
    return (await this.client()).dropDatabase();
  }

  private async client(): Promise<MongooseClient> {
    return this._client;
  }

  public async close(): Promise<void> {
    return (await this.client()).close();
  }
}
