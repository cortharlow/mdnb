import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Note } from '../../core/note.service';

@Component({
  selector: 'note-form-component',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})

export class NoteFormComponent {
  newNote = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  constructor() { }

  onSubmit() {
    console.log(this.newNote.value);
  }
}
