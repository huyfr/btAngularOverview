import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.scss']
})
export class HackerNewsComponent implements OnInit {

  constructor(private articleService: ArticleService) {
  }

  articles: Article[];

  selectedArticle: Article;

  getArticleFromService(): void {
    this.articleService.getArticle().subscribe(
      (updatedArticle) => {
        this.articles = updatedArticle;
        console.log(`this.movies = ${JSON.stringify(this.articles)}`);
      }
    );
  }

  onSelect(article: Article): void {
    this.selectedArticle = article;
    console.log(`selectedArticle = ${JSON.stringify(this.selectedArticle)}`);
  }

  saveArticleFromService(): void {
    this.articleService.save();
  }

  ngOnInit() {
    this.getArticleFromService();
  }

}
