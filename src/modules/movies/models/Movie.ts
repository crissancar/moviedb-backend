export class Movie {
  readonly id: string;
  readonly title: string;
  readonly overview: string;
  readonly genre_ids: Array<string>;
  readonly release_date: string;
  readonly popularity: number;
  readonly vote_average: number;
  readonly vote_count: number;
  readonly poster_path: string;

  constructor(
    id: string,
    title: string,
    overview: string,
    genre_ids: Array<string>,
    release_date: string,
    popularity: number,
    vote_average: number,
    vote_count: number,
    poster_path: string
  ) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.genre_ids = genre_ids;
    this.release_date = release_date;
    this.popularity = popularity;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
    this.poster_path = poster_path;
  }

  static createMovie(
    id: string,
    title: string,
    overview: string,
    genre_ids: Array<string>,
    release_date: string,
    poster_path: string
  ) {
    return new Movie(id, title, overview, genre_ids, release_date, 0, 0, 0, poster_path);
  }

  static createMovieFromTMDB(
    id: string,
    title: string,
    overview: string,
    genre_ids: Array<string>,
    release_date: string,
    popularity: number,
    vote_average: number,
    vote_count: number,
    poster_path: string
  ) {
    return new Movie(id, title, overview, genre_ids, release_date, popularity, vote_average, vote_count, poster_path);
  }

  static fromPlainData(plainData: {
    id: string;
    title: string;
    overview: string;
    genre_ids: Array<string>;
    release_date: string;
    popularity: number;
    vote_average: number;
    vote_count: number;
    poster_path: string;
  }) {
    return new Movie(
      plainData.id,
      plainData.title,
      plainData.overview,
      plainData.genre_ids,
      plainData.release_date,
      plainData.popularity,
      plainData.vote_average,
      plainData.vote_count,
      plainData.poster_path
    );
  }
}
