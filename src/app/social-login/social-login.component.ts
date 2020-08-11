import { Component, Input, Output } from '@angular/core'
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login'

import {Router} from '@angular/router'

import {AuthSocialService} from '../shared/services/auth-social.service'

@Component({
  selector: 'social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})

export class SocialLoginComponent {
  // title = 'angular-google-signin'
  user: any


  constructor(
    private _socioAuthServ: AuthService,
    private router: Router,
    private someSrv: AuthSocialService
  ) {  }

 
  // Method to sign in with google.
  singIn(platform : string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then(
      (response) => {
      //  console.log(platform + " logged in user data is= " , response)
        this.user = response
        this.someSrv.userSocial = response       
        this.router.navigate(['menu'])
      }
    );
  }
  singInFacebook(): void {
   // platform = FacebookLoginProvider.PROVIDER_ID
    this._socioAuthServ.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (response) => {
       // console.log(platform + " logged in user data is= " , response)
        this.user = response
        this.router.navigate(['menu'])
      }
    );
  }
  // Method to log out.
  signOut(): void {
    this._socioAuthServ.signOut()
    this.user = null
    console.log('User signed out.')
  }
}
