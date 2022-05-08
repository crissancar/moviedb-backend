import { UuidMother } from '../../../shared/mothers/UuidMother';

export class MovieGenreIdsMother {
  static create(value: Array<string>): Array<string> {
    return value;
  }

  static random(): Array<string> {
    return this.create([UuidMother.random(), UuidMother.random()]);
  }
}
