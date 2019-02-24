import { Component, OnInit } from '@angular/core';
import { Note, NoteService } from '../../core/note.service';

@Component({
  selector: 'notebook-component',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})

export class NotebookComponent implements OnInit {
  notes: Note[] = [];

  constructor(
    private noteService: NoteService
  ) { }

  ngOnInit() {
    console.log('Notebook');

    this.noteService.getNotes().subscribe(response => {
      this.notes = response;
      console.log(this.notes);
    });
  }

}
