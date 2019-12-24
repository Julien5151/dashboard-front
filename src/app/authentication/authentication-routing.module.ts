import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

export const AUTHENTICATION_LOGIN_ROUTE = 'login';
export const AUTHENTICATION_LOGIN_FULLPATH_ROUTE_ARRAY = ['auth', 'login'];

export const AUTHENTICATION_SIGNUP_ROUTE = 'signup';
export const AUTHENTICATION_SIGNUP_FULLPATH_ROUTE_ARRAY = ['auth', 'signup'];

const authRoutes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: AUTHENTICATION_LOGIN_ROUTE,
        component: LoginComponent
      },
      {
        path: AUTHENTICATION_SIGNUP_ROUTE,
        component: SignupComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
