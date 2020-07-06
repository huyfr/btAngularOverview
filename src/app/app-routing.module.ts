import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetComponent} from './pet/pet.component';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';
import {HackerNewsComponent} from './hacker-news/hacker-news.component';
import {NameCardComponent} from './name-card/name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {RatingBarComponent} from './rating-bar/rating-bar.component';
import {TodoApplicationComponent} from './todo-application/todo-application.component';

const routes: Routes = [
  {path: 'pet', component: PetComponent},
  {path: 'font-size', component: FontSizeEditorComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'color-picker', component: ColorPickerComponent},
  {path: 'news', component: HackerNewsComponent},
  {path: 'name-card', component: NameCardComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: 'countdown-timer', component: CountdownTimerComponent},
  {path: 'rating-bar', component: RatingBarComponent},
  {path: 'todo', component: TodoApplicationComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
