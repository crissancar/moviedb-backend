import { UuidMother } from '../../../shared/mothers/UuidMother';

export class MovieIdMother {
  static create(value: string): string {
    return value;
  }

  static random(): string {
    return this.create(UuidMother.random());
  }
}
