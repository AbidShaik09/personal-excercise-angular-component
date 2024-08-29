import { Component } from '@angular/core';
import { Note } from '../Models/note';
import { NotesService } from '../services/notes.service';
@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent {
  note:Note=new Note();
  notes:Array<Note>=[]
  constructor(private n:NotesService){
    this.notes = n.getNotes()

  }

  AddNote(){
    this.n.addNote(this.note);
    this.note = new Note()
  }
  clear(){
    this.note = new Note()
  }


}
