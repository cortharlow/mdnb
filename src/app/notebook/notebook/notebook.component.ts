import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../core/note.service';

@Component({
  selector: 'notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})

export class NotebookComponent implements OnInit {
  constructor(
    private noteService: NoteService
  ) { }

  ngOnInit() {
    console.log('Notebook');

    this.noteService.getNotes().subscribe(response => {
      console.log(response);
    })
  }

}
