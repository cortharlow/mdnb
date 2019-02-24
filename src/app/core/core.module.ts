import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './api.service';
import { NoteService } from './note.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ],
  providers: [
    ApiService,
    NoteService
  ]
})

export class CoreModule { }
