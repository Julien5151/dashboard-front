import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    SharedModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
