import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { PetComponent } from './pet/pet.component';
import {FormsModule} from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import {ArticleService} from './article.service';
import { LikesComponent } from './likes/likes.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CreateHackerNewsComponent } from './create-hacker-news/create-hacker-news.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    CalculatorComponent,
    ColorPickerComponent,
    HackerNewsComponent,
    ArticleDetailComponent,
    LikesComponent,
    CreateHackerNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
