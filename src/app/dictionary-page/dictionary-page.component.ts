import { Component, OnInit } from '@angular/core';
import {Dictionary} from '../../models/dictionary';
import {DictionaryService} from '../dictionary.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss']
})
export class DictionaryPageComponent implements OnInit {

  dictionaryList: Dictionary[] = [];

  constructor(private dictionaryService: DictionaryService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.dictionaryList = this.dictionaryService.getAll();
  }

}
