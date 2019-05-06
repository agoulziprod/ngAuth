import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specials = [];
  constructor(private eventsService: EventsService) { }
  

  ngOnInit() {
    this.eventsService.getSpecial().subscribe(
      res => this.specials = res,
      err=>console.log(err)
    )
  }



}
