import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const AUTHENTICATION_PAGE_ROUTE = 'auth';
export const AUTHENTICATION_PAGE_ROUTE_ARRAY = ['auth'];

const routes: Routes = [
  {
    path: AUTHENTICATION_PAGE_ROUTE,
    loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
