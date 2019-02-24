import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Note {
  title: string;
  content: string;
  createdDate: string | Date;
}

@Injectable()

export class NoteService {
  constructor() { }
}
