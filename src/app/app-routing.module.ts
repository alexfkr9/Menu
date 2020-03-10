import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuPageComponent} from './menu-page/menu-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {OderPageComponent} from './oder-page/oder-page.component';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
	{path: '', component: LoginPageComponent},
	{path: 'post/:id', component: MenuPageComponent},
  	{path: '**', component: OderPageComponent},

    // {path: 'post/:21', component: MainLayoutComponent}  
];

@NgModule({
  imports: [CommonModule,
    FormsModule,    
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
