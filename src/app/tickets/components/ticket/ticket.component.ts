import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Rating } from 'src/app/shared/enums/rating.enum';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/root.reducer';
import { Subscription } from 'rxjs';
import { Ticket } from 'src/app/shared/models/ticket.model';
import * as TicketActions from 'src/app/tickets/components/ticket/ticket.actions';
import { take, debounceTime } from 'rxjs/operators';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { BasicComponent } from 'src/app/shared/components/basic/basic.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent extends BasicComponent implements OnInit, OnDestroy {

  // Subscriptions array
  subs: Subscription[] = [];
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


  constructor(
    store: Store<State>,
    private dbService: DatabaseService
  ) {
    super(store);
  }

  ngOnInit() {
    // Create new ticket in store
    this.initStore();
    // Init reactive form object
    this.initForm();
    // Handle value changes in form
    this.handleValueChanges();
  }

  ngOnDestroy() {
    // Unsubscribe all to avoid memory leak
    this.subs.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  private initStore() {
    // Check if there is data in store
    const sub = this.data$.pipe(take(1)).subscribe((ticketData) => {
      if (ticketData === null) {
        // Create new ticket in store
        this.store.dispatch(new TicketActions.TicketUpdateData(new Ticket()));
      }
    });
    // Add to subs array for unsubcribe on destroy
    this.subs.push(sub);
  }

  private initForm() {
    // Check if there is data in store
    const sub = this.data$.pipe(take(1)).subscribe((ticketData) => {
      this.ticketForm = new FormGroup({
        id: new FormControl(ticketData.id),
        ownerShortName: new FormControl(ticketData.ownerShortName),
        creationDate: new FormControl(ticketData.creationDate),
        inputDataDate: new FormControl(ticketData.inputDataDate),
        deadline: new FormControl(ticketData.deadline),
        comments: new FormControl(ticketData.comments),
        rating: new FormControl(ticketData.rating)
      });
    });
    // Add to subs array for unsubcribe on destroy
    this.subs.push(sub);
  }

  private handleValueChanges() {
    // Subscribe to any value changes in the form
    const sub = this.ticketForm.valueChanges.pipe(debounceTime(500)).subscribe((formValues) => {
      if (this.ticketForm.valid) {
        this.store.dispatch(new TicketActions.TicketUpdateData(new Ticket(
          formValues.id,
          formValues.ownerShortName,
          formValues.creationDate,
          formValues.inputDataDate,
          formValues.deadline,
          formValues.comments,
          formValues.rating
        )));
      }
    });
    // Add to subs array for unsubcribe on destroy
    this.subs.push(sub);
  }

  // Save ticket to database
  onSave() {
    // Get data from state
    const ticketData = this.getState().ticketsModule.ticketState.data;
    // Database call for saving ticket
    this.dbService.saveTicket(ticketData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
