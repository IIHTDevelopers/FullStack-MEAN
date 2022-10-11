import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../models/titcket';
import { TicketService } from '../_services/ticket.service';

@Component({
  selector: 'app-movie-ticket',
  templateUrl: './movie-ticket.component.html',
  styleUrls: ['./movie-ticket.component.css']
})
export class MovieTicketComponent implements OnInit {

  @Input()
  ticket:Ticket;
  message:string = "";

  constructor(private ticketService:TicketService) { }

  ngOnInit() {
  }

  confirmBooking(){
    
  }

}
