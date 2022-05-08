import { MotherCreator } from './MotherCreator';

export class SentenceMother {
  static random(): string {
    return MotherCreator.random().lorem.sentence();
  }
}
