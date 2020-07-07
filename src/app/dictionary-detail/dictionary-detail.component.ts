import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dictionary} from '../../models/dictionary';
import {Subscription} from 'rxjs';
import {DictionaryService} from '../dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit, OnDestroy {

  currentWord: Dictionary;
  sub: Subscription;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const key = paramMap.get('word');
      const value = this.dictionaryService.search(key);
      this.currentWord = {
        word: key,
        meaning: value
      };
      console.log(JSON.stringify(this.currentWord));
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
