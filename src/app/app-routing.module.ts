import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const AUTHENTICATION_PAGE_ROUTE = 'auth';
export const TICKETS_PAGE_ROUTE = 'tickets';

const routes: Routes = [
  {
    path: AUTHENTICATION_PAGE_ROUTE,
    loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule)
  },
  {
    path: TICKETS_PAGE_ROUTE,
    loadChildren: () => import('./tickets/tickets.module').then(mod => mod.TicketsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
