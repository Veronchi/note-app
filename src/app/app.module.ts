import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddBtnComponent } from './add-btn/add-btn.component';
import { NotesComponent } from './notes/notes.component';
import { NoteFormComponent } from './note-form/note-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBtnComponent,
    NotesComponent,
    NoteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
