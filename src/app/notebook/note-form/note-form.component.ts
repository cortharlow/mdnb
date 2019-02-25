import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Note, NoteService } from '../../core/note.service';

@Component({
  selector: 'note-form-component',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})

export class NoteFormComponent {
  @Output() addNote: EventEmitter<Note> = new EventEmitter();

  newNoteForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(
    private noteService: NoteService
  ) { }

  onSubmit() {
    this.noteService.createNote(this.newNoteForm.value).subscribe(response => {
      this.addNote.next(new Note(response.body.title, response.body.content, response.body.created_at));
      this.newNoteForm.reset();
    });
  }
}
