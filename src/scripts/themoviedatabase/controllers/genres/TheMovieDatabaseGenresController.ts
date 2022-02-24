import { TheMovieDatabaseConfig } from '../../TheMovieDatabaseConfig';
import { GenresGetter } from '../../services/genres/GenresGetter';
import { GenresPersister } from '../../services/genres/GenresPersister';
import { Controller } from '../../../../modules/shared/controllers/Controller';

export class TheMovieDatabaseGenresController extends TheMovieDatabaseConfig implements Controller {
  private readonly genresGetter: GenresGetter;
  private readonly genresPersister: GenresPersister;

  constructor(genresGetter: GenresGetter, genresPerister: GenresPersister) {
    super();
    this.genresGetter = genresGetter;
    this.genresPersister = genresPerister;
  }

  public async run() {
    const genresData = await this.genresGetter.run();

    await this.genresPersister.run(genresData);
  }
}
