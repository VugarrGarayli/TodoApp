import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoheaderComponent } from './todoheader/todoheader.component';
import { TodosearchbxComponent } from './todosearchbx/todosearchbx.component';
import { TodocheckbxComponent } from './todocheckbx/todocheckbx.component';
import { TodoscheduleComponent } from './todoschedule/todoschedule.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoheaderComponent,
    TodosearchbxComponent,
    TodocheckbxComponent,
    TodoscheduleComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
