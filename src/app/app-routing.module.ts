import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import { AddObjectComponent } from './add-object/add-object.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"AddObject",component:AddObjectComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
