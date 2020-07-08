import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery.component';
import { NameCardComponent } from './name-card/name-card.component';

@NgModule({
  declarations: [ImageGalleryComponent, NameCardComponent],
  exports: [
    ImageGalleryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImageGalleryModule { }
