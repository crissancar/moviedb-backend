import { NumberMother } from '../../../shared/mothers/NumberMother';

export class MoviePopularityMother {
  static create(value: number): number {
    return value;
  }

  static random(): number {
    return this.create(NumberMother.randomWithDecimals());
  }
}
