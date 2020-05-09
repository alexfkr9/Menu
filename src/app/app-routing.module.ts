import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuPageComponent} from './menu-page/menu-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {OderPageComponent} from './oder-page/oder-page.component';

import {CreatePageComponent} from './create-page/create-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {GalleryComponent} from './gallery/gallery.component';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const routes: Routes = [	
	{path: '', component: LoginPageComponent},
	{path: 'menu', component: MenuPageComponent},
  {path: 'oder', component: OderPageComponent},
  {path: 'create', component: CreatePageComponent},
  {path: 'dashboard', component: DashboardPageComponent}  
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
