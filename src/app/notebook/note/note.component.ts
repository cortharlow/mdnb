import { Component, Input } from '@angular/core';
import { Note } from '../../core/note.service';

@Component({
  selector: 'note-component',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent {
  @Input() notes: Note[];

  constructor() { }
}
