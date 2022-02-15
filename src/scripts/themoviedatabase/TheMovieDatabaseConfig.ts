import environment from '../../config/environment';

export class TheMovieDatabaseConfig {
  protected accessToken: string;
  protected apiKey: string;
  protected completeUrl: string;

  protected constructor() {
    this.accessToken = environment.get('themoviedatabase.accessToken');
    this.apiKey = environment.get('themoviedatabase.apiKey');
    this.completeUrl = '';
  }

  protected axiosConfig() {
    return { headers: { Authorization: `Bearer ${this.accessToken}` } };
  }
}
