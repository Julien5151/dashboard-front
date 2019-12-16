import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Rating } from 'src/app/shared/enums/rating.enum';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  ticketRating = Rating;

  ticketForm = new FormGroup({
    id: new FormControl(''),
    ownerShortName: new FormControl(''),
    creationDate: new FormControl(''),
    inputDataDate: new FormControl(''),
    deadline: new FormControl(''),
    comments: new FormControl(''),
    rating: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
