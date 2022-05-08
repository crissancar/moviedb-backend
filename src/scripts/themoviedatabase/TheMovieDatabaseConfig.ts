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
    delete process.env.http_proxy;
    delete process.env.HTTP_PROXY;
    delete process.env.https_proxy;
    delete process.env.HTTPS_PROXY;
    return { headers: { Authorization: `Bearer ${this.accessToken}` } };
  }
}
