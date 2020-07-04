import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {

  constructor() { }

  likes = 0;

  clickLikes(): void {
    this.likes++;
  }

  ngOnInit(): void {
  }

}
