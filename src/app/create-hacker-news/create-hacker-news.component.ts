import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-create-hacker-news',
  templateUrl: './create-hacker-news.component.html',
  styleUrls: ['./create-hacker-news.component.scss']
})
export class CreateHackerNewsComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

  saveArticleFromService(): void {
    this.articleService.save();
  }

}
