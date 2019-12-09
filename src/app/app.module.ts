import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RepeatDirective } from './repeat.directive';
import { MessageDirective } from './message.directive';
import { CourseListComponent } from './course-list/course-list.component';
import { CountryListComponent } from './country-list/country-list.component';

 

@NgModule({
  declarations: [
    AppComponent,
    RepeatDirective,
    MessageDirective,
    CourseListComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
