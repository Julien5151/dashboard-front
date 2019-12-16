import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  ticketForm = new FormGroup({
    ticketId: new FormControl('Ticket 1')
  });

  constructor() { }

  ngOnInit() {
  }

}
