import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import { AddObjectComponent } from './add-object/add-object.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserInscriptionComponent } from './user-inscription/user-inscription.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"AddObject",component:AddObjectComponent},
  {path:"user",component:UserComponent},
  {path:"register", component:UserInscriptionComponent},
  {path: '**', component:NotFoundComponent} 
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
