import { NgModule } from '@angular/core';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketsManagerComponent } from './components/tickets-manager/tickets-manager.component';
import { TicketsRoutingModule } from './tickets-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TicketsComponent,
    TicketComponent,
    TicketsManagerComponent
  ],
  imports: [
    SharedModule,
    TicketsRoutingModule
  ]
})
export class TicketsModule { }
