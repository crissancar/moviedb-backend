export class MovieNotExists extends Error {
  constructor() {
    super('The movie does not exists');
  }
}
