import { Component, OnInit } from '@angular/core';
import { Note, NoteService } from '../../core/note.service';

@Component({
  selector: 'note-container-component',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.scss']
})

export class NoteContainerComponent implements OnInit {
  notes: Note[] = [];

  constructor(
    private noteService: NoteService
  ) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe(response => {
      this.notes = response;
      console.log(this.notes);
    });
  }

}
