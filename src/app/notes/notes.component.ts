import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../app.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() note!: Note

  constructor() { }

  ngOnInit(): void {
  }

}