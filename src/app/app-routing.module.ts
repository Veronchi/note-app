import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteFormComponent } from './note-form/note-form.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {path: '', component: NotesComponent},
  {path: 'new', component: NoteFormComponent},
  {path: '**', component: NoteFormComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
