import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers/root.reducer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public environment = environment;

  constructor(private store: Store<State>) { }
}
