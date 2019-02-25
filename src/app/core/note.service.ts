import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

enum NoteUrls {
  getNotes = 'notes',
  createNote = 'notes/create'
}

export class Note {
  constructor(
    public title: string,
    public content: string,
    public createdDate: string | Date
  ) {}
}

@Injectable()

export class NoteService {
  constructor(
    private api: ApiService
  ) { }

  getNotes() {
    return this.api.get(NoteUrls.getNotes);
  }

  createNote(note: Note) {
    return this.api.post(NoteUrls.createNote, note);
  }
}
