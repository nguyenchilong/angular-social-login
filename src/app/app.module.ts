import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider

} from 'angular-6-social-login';

import { RouterModule, Routes } from '@angular/router';
import { AuthAPIService } from './services/auth-api.service';
import { UserService } from './services/user.service';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', component: LoginPageComponent }
  ];

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('1751117011565467')
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('1094067897150-miuatns6qubuo2se6u390alqrjqlh598.apps.googleusercontent.com')
        }
      ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule, HttpModule, RouterModule.forRoot(routes)
  ],
  providers: [ AuthAPIService, UserService, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
