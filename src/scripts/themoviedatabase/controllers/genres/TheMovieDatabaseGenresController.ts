import { TheMovieDatabaseConfig } from '../../TheMovieDatabaseConfig';
import { GenresGetter } from '../../services/genres/GenresGetter';
import { GenresModeler } from '../../services/genres/GenresModeler';
import { GenresPersister } from '../../services/genres/GenresPersister';
import { Controller } from '../../../../modules/shared/controllers/Controller';

export class TheMovieDatabaseGenresController extends TheMovieDatabaseConfig implements Controller {
  private readonly genresGetter: GenresGetter;
  private readonly genresModeler: GenresModeler;
  private readonly genresPersister: GenresPersister;

  constructor(genresGetter: GenresGetter, genresModeler: GenresModeler, genresPerister: GenresPersister) {
    super();
    this.genresGetter = genresGetter;
    this.genresModeler = genresModeler;
    this.genresPersister = genresPerister;
  }

  public async run() {
    const genresData = await this.genresGetter.run();

    await this.genresModeler.run(genresData);

    await this.genresPersister.run(genresData);
  }
}
