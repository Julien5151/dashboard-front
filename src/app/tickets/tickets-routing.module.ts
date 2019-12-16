import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketsManagerComponent } from './components/tickets-manager/tickets-manager.component';

export const TICKETS_NEW_TICKET = 'new';
export const TICKETS_NEW_TICKET_FULLPATH_ROUTE_ARRAY = ['tickets', 'new'];

export const TICKETS_MANAGE_TICKETS = 'manage';
export const TICKETS_MANAGE_TICKETS_FULLPATH_ROUTE_ARRAY = ['tickets', 'manage'];

const ticketsRoutes: Routes = [
  {
    path: '',
    component: TicketsComponent,
    children: [
      {
        path: TICKETS_NEW_TICKET,
        component: TicketComponent
      },
      {
        path: TICKETS_MANAGE_TICKETS,
        component: TicketsManagerComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ticketsRoutes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
