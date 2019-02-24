import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

enum NoteUrls {
  getNotes = 'notes',
  createNote = 'notes/create'
}

export interface Note {
  title: string;
  content: string;
  createdDate: string | Date;
}

@Injectable()

export class NoteService {
  constructor(
    private api: ApiService
  ) { }

  getNotes() {
    return this.api.get(NoteUrls.getNotes)
  }
}
