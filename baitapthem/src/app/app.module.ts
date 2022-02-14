import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { DetailstudentComponent } from './detailstudent/detailstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    ListstudentComponent,
    CreatestudentComponent,
    DetailstudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
