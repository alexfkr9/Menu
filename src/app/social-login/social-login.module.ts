import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
// import { SocialLoginRoutingModule } from './social-login-routing.module'
import { SocialLoginComponent } from './social-login.component'

// Importing social login module and google login provider.
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login'
import { from } from 'rxjs'
 

 
// Client id for the google oauth. This is used for validation of our application to google.
// 461068843179-jm1k8h8tgf4lr27pp3l1uupc6j25qp45.apps.googleusercontent.com
//461068843179-h8gd0mqvpd5aq9jl9r8fhnktciajft65.apps.googleusercontent.com

//face book id
//2538444313043851
// https://developers.google.com/identity/sign-in/web/sign-in#before_you_begin

const google_oauth_client_id:string = '461068843179-9dqf2i8omtfrbe5e425m53kcuvqk69h7.apps.googleusercontent.com'
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_oauth_client_id)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("661529714713339")
  }
]);
export function provideConfig() {
  return config
}
@NgModule({
  declarations: [
    SocialLoginComponent
  ],
  imports: [
    BrowserModule,
    // SocialLoginRoutingModule,
    SocialLoginModule
  ],
  exports: [ SocialLoginComponent ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
    ],
  bootstrap: [SocialLoginComponent]
})
export class SocialLogModule { }
