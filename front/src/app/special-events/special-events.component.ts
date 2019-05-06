import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specials = [];
  constructor(private eventsService: EventsService,
  private router:Router) { }
  

  ngOnInit() {
    this.eventsService.getSpecial().subscribe(
      res => this.specials = res,
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401)
            this.router.navigate(['/login'])
        }
          
      }
    )
  }



}
