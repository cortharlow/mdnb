import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../core/note.service';
import * as Marked from 'marked';

@Component({
  selector: 'note-component',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent implements OnInit {
  @Input() note: Note;
  markdown: string;

  constructor() { }

  ngOnInit() {
    if (this.note.content !== undefined) {
        this.markdown = this.translateContentToMarkdown(this.note.content);
    } else {
      this.markdown = '';
    }
  }

  private translateContentToMarkdown(content: string) {
    return Marked(content);
  }
}
