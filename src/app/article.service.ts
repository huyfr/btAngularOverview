import {Injectable} from '@angular/core';
import {Article} from '../models/article';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor() {
  }

  ListArticle: Article[] = [
    {
      id: 1,
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      id: 2,
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      id: 3,
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      id: 4,
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      id: 5,
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    }
  ];

  getArticle(): Observable<Article[]> {
    return of(this.ListArticle);
  }

  save(): void {
    const newTitle = (document.getElementById('title') as HTMLInputElement).value;
    const newUrl = (document.getElementById('url') as HTMLInputElement).value;
    const article = new Article();
    article.title = newTitle;
    article.url = newUrl;
    this.ListArticle.push(article);
  }

  put(article): void {
    const index = this.ListArticle.findIndex(value => value.id === article.id)
    console.log(index);
    article.title = (document.getElementById('title') as HTMLInputElement).value;
    article.url = (document.getElementById('url') as HTMLInputElement).value;
    this.ListArticle[index] = article;
  }

  delete(id: number): void {
    const index = this.findIndexById(id);
    if (index > -1) {
      this.ListArticle.splice(index, 1);
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i<this.ListArticle.length; i++) {
      if (this.ListArticle[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
