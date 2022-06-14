import { Injectable } from '@angular/core';
import {IWord} from '../iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[] = [
    {
      id: 1,
      word: 'hello',
      mean: 'xin chào'
    },
    {
      id: 2,
      word: 'goodbye',
      mean: 'tạm biệt'
    },
    {
      id: 3,
      word: 'computer',
      mean: 'máy tính'
    },
    {
      id: 4,
      word: 'book',
      mean: 'sách'
    },
  ];
  constructor() { }

  getAll(): IWord[] {
    return  this.words;
  }
  findWordById(id: number) {
    return this.words.find(word => word.id === id);
  }
}
