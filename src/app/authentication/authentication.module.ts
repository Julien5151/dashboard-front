import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    AuthenticationComponent
  ],
  imports: [
    SharedModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
