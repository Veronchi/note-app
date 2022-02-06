import { Component } from '@angular/core';
export interface Note {
  title: string
  text: string
  id?: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes: Note[] = [
    {title: 'Reminder', text: 'reminder text', id: 1},
    {title: 'Hello', text: 'Hello World', id: 2}
  ]
}
