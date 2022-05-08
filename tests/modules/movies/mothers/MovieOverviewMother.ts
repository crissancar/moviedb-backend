import { SentenceMother } from '../../../shared/mothers/SentenceMother';

export class MovieOverviewMother {
  static create(value: string): string {
    return value;
  }

  static random(): string {
    return this.create(SentenceMother.random());
  }
}
