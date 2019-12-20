import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../models/ticket.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DatabaseService {

  constructor(private http: HttpClient) { }

  saveTicket(ticket: Ticket) {
    return this.http.post<any>(environment.backendUrls.saveTicket, {
      ticketData: ticket
    });
  }
}
