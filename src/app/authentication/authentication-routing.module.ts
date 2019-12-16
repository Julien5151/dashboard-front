import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

export const AUTHENTICATION_LOGIN_ROUTE = 'login';
export const AUTHENTICATION_LOGIN_FULLPATH_ROUTE_ARRAY = ['auth', 'login'];

export const AUTHENTICATION_SIGNIN_ROUTE = 'signin';
export const AUTHENTICATION_SIGNIN_FULLPATH_ROUTE_ARRAY = ['auth', 'signin'];

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
                path: AUTHENTICATION_SIGNIN_ROUTE,
                component: SigninComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
