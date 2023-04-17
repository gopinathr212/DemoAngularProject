// import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { featuredEvent } from '../featuredEventInterface';
// import {featuredEvent} from '../featuredEventInterface'

@Component({
  selector: 'app-featured-events',
  templateUrl: './featured-events.component.html',
  styleUrls: ['./featured-events.component.css']
})
export class FeaturedEventsComponent {

  commonFeaturedStat = "Watch this event from your home";


  @Input() featuredEvent:featuredEvent[] | undefined;
}
