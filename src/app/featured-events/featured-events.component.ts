// import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { featuredEvent } from '../featuredEventInterface';
// import {featuredEvent} from '../featuredEventInterface'

@Component({
  selector: 'app-featured-events',
  templateUrl: './featured-events.component.html',
  styleUrls: ['./featured-events.component.css']
})
export class FeaturedEventsComponent{
  

  commonFeaturedStat = "Watch this event from your home";

  @Input() featuredEventValues!:featuredEvent;
  
  // ngOnInit(): void {
  //   console.log(this.featuredEventValues);
  // }
  // Event:featuredEvent[] =[{
  //   card:1,
  //   commonStat1:'video on demand',
  //   commonStat2:'watch on insider',
  //   currency:149,
  //   image:"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_220/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1673614976%2Fcdzngnyphs4ffdl8cs7c.jpg",
  //   imageDes:"Tughlaq - A rehearsed reading",
  //   category:"THEATRE & ARTS"
  // },{
  //   card:2,
  //   commonStat1:'video on demand',
  //   commonStat2:'watch on insider',
  //   currency:149,
  //   image:"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_220/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1673614794%2Fy3psdcxh7elapfiwoqfm.jpg",
  //   imageDes:"Find your Ikigai (access it anytime,anywhere)",
  //   category:"HEALTH & WELLNESS"
  // },{
  //   card:3,
  //   commonStat1:'video on demand',
  //   commonStat2:'watch on insider',
  //   currency:149,
  //   image:"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_220/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1674110822%2Fgsqpdsv6klecnnz6aurg.jpg",
  //   imageDes:"Wine 101 by Gargi Kothari",
  //   category:"COURSE"
  // },
  // {
  //   card:4,
  //   commonStat1:'video on demand',
  //   commonStat2:'watch on insider',
  //   currency:149,
  //   image:"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_220/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1674111110%2Fwwixv5xynydjrdu2zhpj.jpg",
  //   imageDes:"Terence Lewis Dance - Contemporary Tutorial",
  //   category:"WORKSHOP"
  // }];

}
