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
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {AuthGuard} from './auth.guard';

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
  {path: 'todo', component: TodoApplicationComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'timelines', component: TimelinesComponent},
  {path: 'youtube', component: YoutubePlaylistComponent, children: [{path: ':id', component: YoutubePlayerComponent}]},
  {path: 'dictionary1', component: DictionaryComponent},
  {path: 'dictionary2', component: DictionaryPageComponent, children: [{path: ':word', component: DictionaryDetailComponent, canActivate: [AuthGuard]}]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
