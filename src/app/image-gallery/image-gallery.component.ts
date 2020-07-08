import {Component, Inject, OnInit, Optional} from '@angular/core';
import {galleryConfig} from './token';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  imageList = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];

  itemWith: number;
  config = 4;

  constructor(@Inject(galleryConfig)
              @Optional() config: number) {
    if (config) {
      this.config = config;
    }

  }

  ngOnInit(): void {
    this.itemWith = 100 / this.config;
  }

}
