import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../models/ticket.model';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interfaces/LoginResponse.interface';
import { StoreService } from './store.service';

@Injectable({ providedIn: 'root' })
export class DatabaseService {

  constructor(
    private http: HttpClient,
    private storeService: StoreService) { }

  saveTicket(ticket: Ticket) {
    // Get token from state
    const token = this.storeService.getState().appGlobalState.userData.userToken;
    return this.http.post<any>(environment.backendUrls.saveTicket, {
      ticketData: ticket
    }, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }

  logIn(email: string, password: string) {
    return this.http.post<LoginResponse>(environment.backendUrls.loginUser, {
      email,
      password
    });
  }

  signIn(email: string, password: string, passwordConfirmation: string) {
    return this.http.post<any>(environment.backendUrls.signinUser, {
      email,
      password,
      passwordConfirmation
    });
  }
}
