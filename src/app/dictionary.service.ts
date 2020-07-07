import { Injectable } from '@angular/core';
import {Dictionary} from '../models/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private words: Dictionary[] = [
    {
      word: 'hello',
      meaning: 'xin chào'
    },
    {
      word: 'goodbye',
      meaning: 'Tạm biệt'
    },
    {
      word: 'snow',
      meaning: 'Tuyết'
    },
    {
      word: 'provide',
      meaning: 'Cung cấp'
    },
  ]

  constructor() { }

  search(word: string): string {
    let w;
    if (!word) {
      return '';
    }
    w = this.words.find(item => item.word === word.toLowerCase());
    if (w) {
      return w.meaning;
    } else {
      return 'Not found';
    }
  }

  getAll(): Dictionary[] {
    return this.words;
  }
}
