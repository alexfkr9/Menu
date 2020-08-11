import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {MenuPageComponent} from './menu-page/menu-page.component'
import {LoginPageComponent} from './login-page/login-page.component'
import {OderPageComponent} from './oder-page/oder-page.component'

import {GalleryComponent} from './gallery/gallery.component'

import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import { SocialLoginComponent } from './social-login/social-login.component'

const routes: Routes = [	
	{path: '', component: LoginPageComponent},
	{path: 'menu', component: MenuPageComponent},
  	{path: 'oder', component: OderPageComponent},  
  	{path: 'social', component: SocialLoginComponent} 
]

@NgModule({
  imports: [CommonModule,
    FormsModule,    
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
