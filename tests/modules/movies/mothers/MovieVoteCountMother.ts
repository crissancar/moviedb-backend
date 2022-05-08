import { NumberMother } from '../../../shared/mothers/NumberMother';

export class MovieVoteCountMother {
  static create(value: number): number {
    return value;
  }

  static random(): number {
    return this.create(NumberMother.random());
  }
}
