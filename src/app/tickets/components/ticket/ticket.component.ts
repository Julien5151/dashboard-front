import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Rating } from 'src/app/shared/enums/rating.enum';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/root.reducer';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  // Binding to enum
  ticketRating = Rating;
  // Form variable
  ticketForm: FormGroup;

  // Store internal dependencies
  public mode$ = this.store.select((state) => {
    return state.ticketsModule.ticketState.mode;
  });
  public data$ = this.store.select((state) => {
    return state.ticketsModule.ticketState.data;
  });

  // Store external dependencies
  public ownerShortName$ = this.store.select((state) => {
    return state.appGlobalState.userData.shortName;
  });


  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    // Init reactive form object
    this.initForm();
  }

  // Create reactive form matching ticket model
  private initForm() {
    this.ticketForm = new FormGroup({
      id: new FormControl(''),
      ownerShortName: new FormControl(''),
      creationDate: new FormControl(''),
      inputDataDate: new FormControl(''),
      deadline: new FormControl(''),
      comments: new FormControl(''),
      rating: new FormControl('')
    });
  }

}
