import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordianComponent } from './accordian/accordian.component';
import { ShowNotesComponent } from './show-notes/show-notes.component';


const routes: Routes = [
  {path:'new-note',component: AccordianComponent},
  {path:'show-notes',component: ShowNotesComponent},
  { path: '**', component: ShowNotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
