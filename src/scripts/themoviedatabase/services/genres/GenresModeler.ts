import { TMDBData } from '../../types/TMDBData';

export class GenresModeler {
  public async run(genresData: TMDBData): Promise<void> {
    genresData.map((genre: any) => (genre.id = this.convertIdToString(genre.id)));
  }

  private convertIdToString(id: number) {
    return id.toString();
  }
}
