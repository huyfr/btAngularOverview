import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Article} from '../../models/article';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: Article,
              private articleService: ArticleService ) { }

  ngOnInit() {
  }

  putArticleFromService(article) {
    this.articleService.put(article);
  }


}
