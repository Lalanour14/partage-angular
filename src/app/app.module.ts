import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ObjectItemComponent } from './object-item/object-item.component';
import {AddObjectComponent } from './add-object/add-object.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    ObjectItemComponent,
    AddObjectComponent,
    NotFoundComponent,
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
