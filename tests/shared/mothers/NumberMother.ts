import { MotherCreator } from './MotherCreator';

export class NumberMother {
  static random(): number {
    return MotherCreator.random().datatype.number();
  }

  static randomWithDecimals(): number {
    return MotherCreator.random().datatype.number({ min: 10, max: 1000, precision: 0.01 });
  }
}
