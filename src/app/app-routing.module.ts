import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuPageComponent} from './menu-page/menu-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {OderPageComponent} from './oder-page/oder-page.component';

import {CreatePageComponent} from './create-page/create-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {RemovePageComponent} from './remove-page/remove-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {GalleryComponent} from './gallery/gallery.component';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const routes: Routes = [	
	{path: '', component: LoginPageComponent},
	{path: 'menu', component: MenuPageComponent},
  {path: 'oder', component: OderPageComponent},
  {path: 'create', component: CreatePageComponent},
  {path: 'edit', component: EditPageComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'remove', component: RemovePageComponent}
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
