export class GenreNotExists extends Error {
  constructor() {
    super('The genre does not exists');
  }
}
