import { Injectable } from '@angular/core';
import { Note } from '../Models/note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes :Array<Note>=[]  
  addNote(note:Note){
    this.http.post('http://localhost:3000/notes/',note).subscribe((p)=>{
      //this.notes.push()
      console.log(p)
    })
  }
  getNotes(){
    this.http.get<Array<Note>>('http://localhost:3000/notes/').subscribe((p)=>{
      this.notes = p
    })
    return this.notes;
  }


  constructor(private http:HttpClient) {
    

   }
}
