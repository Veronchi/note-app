import { Component, Input, OnInit } from '@angular/core';
 interface Note {
  title: string
  text: string
  id?: number
}
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [
    {title: 'Reminder', text: 'reminder text', id: 1},
    {title: 'Hello', text: 'Hello World', id: 2}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
