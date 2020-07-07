import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../dictionary.service';
import {Dictionary} from '../../models/dictionary';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  word: Dictionary;

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
  }

  search(key: string) {
    const value = this.dictionaryService.search(key);
    this.word = {
      word: key,
      meaning: value
    };
  }
}
