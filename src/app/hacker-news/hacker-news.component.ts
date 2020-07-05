import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../article.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateHackerNewsComponent} from '../create-hacker-news/create-hacker-news.component';
import {ArticleDetailComponent} from '../article-detail/article-detail.component';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.scss']
})
export class HackerNewsComponent implements OnInit {

  constructor(private articleService: ArticleService,
              public dialog: MatDialog) {
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
    this.openEditForm();
    console.log(`selectedArticle = ${JSON.stringify(this.selectedArticle)}`);
  }

  ngOnInit() {
    this.getArticleFromService();
  }

  openCreateForm(): void {
    const dialogRef = this.dialog.open(CreateHackerNewsComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditForm(): void {
    const dialogRef = this.dialog.open(ArticleDetailComponent, {
      data: {
        id: this.selectedArticle.id,
        title: this.selectedArticle.title,
        url: this.selectedArticle.url
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteArticleFromService(id: number) {
    this.articleService.delete(id);
  }
}
