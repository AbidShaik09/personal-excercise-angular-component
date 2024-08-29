import { Component } from '@angular/core';
import { Note } from '../Models/note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent {
  notes:Array<Note> = []
  
  constructor(n:NotesService){
    this.notes = n.getNotes()

  }
}
