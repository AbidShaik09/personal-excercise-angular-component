import { Injectable } from '@angular/core';
import { Note } from '../Models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public notes :Array<Note>=[]  
  constructor() { }
}
