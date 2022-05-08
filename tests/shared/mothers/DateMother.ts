import { MotherCreator } from './MotherCreator';

export class DateMother {
  static random(): string {
    return MotherCreator.random().date.between('2022-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z').toString();
  }
}
