import axios from 'axios';
import { TheMovieDatabaseConfig } from '../../TheMovieDatabaseConfig';
import { TMDB } from '../../enums/TMDB';
import { TMDBData } from '../../types/TMDBData';

export class GenresGetter extends TheMovieDatabaseConfig {
  constructor() {
    super();
    this.buildCompleteUrl();
  }

  public async run(): Promise<TMDBData> {
    let response;
    let genresData: TMDBData = [];

    try {
      response = await axios.get(this.completeUrl, this.axiosConfig());
      genresData = response.data.genres;
    } catch (error) {
      console.log(error);
    }

    return genresData;
  }

  private buildCompleteUrl() {
    this.completeUrl = `${TMDB.GENRES_BASE_URL}${TMDB.API_KEY_URL}${this.apiKey}`;
  }
}
