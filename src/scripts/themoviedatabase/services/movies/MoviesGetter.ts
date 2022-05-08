import { TMDBData } from '../../types/TMDBData';
import { TMDB } from '../../enums/TMDB';
import axios from 'axios';
import { TheMovieDatabaseConfig } from '../../TheMovieDatabaseConfig';

export class MoviesGetter extends TheMovieDatabaseConfig {
  constructor() {
    super();
  }

  public async run(): Promise<TMDBData> {
    let response;
    let moviesDataPerPage: TMDBData = [];
    let allMoviesData: TMDBData = [];

    for (let page = 1; page <= TMDB.MOVIES_TOTAL_PAGES; page++) {
      this.buildDynamicUrl(page);

      response = await axios.get(this.completeUrl, this.axiosConfig());
      moviesDataPerPage = response.data.results;

      allMoviesData = this.setAllMoviesData(allMoviesData, moviesDataPerPage);
    }

    return allMoviesData;
  }

  private buildDynamicUrl(page: number) {
    this.completeUrl = `${TMDB.MOVIES_BASE_URL}${TMDB.MOVIES_PAGE_URL}${page}${TMDB.API_KEY_URL}${this.apiKey}`;
  }

  private setAllMoviesData(allMoviesData: TMDBData, moviesDataPerPage: TMDBData) {
    return allMoviesData.concat(moviesDataPerPage);
  }
}
