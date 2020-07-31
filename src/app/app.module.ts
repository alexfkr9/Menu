import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {SocialLogModule} from './social-login/social-login.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'; 

import { HttpClientModule }   from '@angular/common/http';

import { LoginPageComponent } from './login-page/login-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { OderPageComponent } from './oder-page/oder-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

import {ImageService} from './shared/image.service';
import {ImageFilter} from './shared/filter.pipe';
import {AuthService} from './shared/services/auth.service';
import {SharedModule} from './shared/shared.module';

import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MenuPageComponent,
    OderPageComponent,
    AdminPageComponent,        
    GalleryComponent,   
    ImageFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,    
    HttpClientModule,
    SocialLogModule
  ],
  providers: [AuthService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
