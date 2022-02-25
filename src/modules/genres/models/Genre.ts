export class Genre {
  readonly id: string;
  readonly name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  static fromPlainData(plainData: { id: string; name: string }): Genre {
    return new Genre(plainData.id, plainData.name);
  }
}
