import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms'; 

import { HttpClientModule }   from '@angular/common/http';

import { LoginPageComponent } from './login-page/login-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { OderPageComponent } from './oder-page/oder-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MenuPageComponent,
    OderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,     
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
