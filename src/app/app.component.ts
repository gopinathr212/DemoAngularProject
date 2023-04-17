import { Component, Input } from '@angular/core';
import { featuredEvent } from './featuredEventInterface';
import { workshop } from './workshopInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoApp';

    work:workshop[] =[{
      card:1,
      workShopName: 'Learn basic of MS-Excel',
      workShopDate: 'March 11 | 1 pm  to March 12 | 2 pm ',
      workShopMode: 'Online',
      cost: 0,
      category:'WORKSHOP',
      image:'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1611056024%2Fssyzpyvulreba8pkvqjs.jpg'
    },{
      card:2,
      workShopName: 'Trading with ETFs by Shankha Mukharjee',
      workShopDate: 'March 11 | 1 pm  to March 12 | 2 pm ',
      workShopMode: 'Online',
      cost: 0,
      category:'WORKSHOP',
      image:'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1678652778%2Fqld4ozaamlbymqk5blsa.png'
    },{
      card:3,
      workShopName: 'History of ETFs with Ashish kumar chauhan',
      workShopDate: 'March 11 | 1 pm  to March 12 | 2 pm ',
      workShopMode: 'Online',
      cost: 0,
      category:'WORKSHOP',
      image:'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1611040422%2Fc8fogouk0l9s4tzwpmhn.jpg'
    }];

    Event:featuredEvent[] =[{
      card:1,
      commonStat1:'video on demand',
      commonStat2:'watch on insider',
      currency:149,
      image:"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_220/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1673614976%2Fcdzngnyphs4ffdl8cs7c.jpg",
      imageDes:"Tughlaq - A rehearsed reading",
      category:"THEATRE & ARTS"
    },{
      card:2,
      commonStat1:'video on demand',
      commonStat2:'watch on insider',
      currency:149,
      image:"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_220/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1673614794%2Fy3psdcxh7elapfiwoqfm.jpg",
      imageDes:"Find your Ikigai (access it anytime,anywhere)",
      category:"HEALTH & WELLNESS"
    },{
      card:3,
      commonStat1:'video on demand',
      commonStat2:'watch on insider',
      currency:149,
      image:"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_220/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1674110822%2Fgsqpdsv6klecnnz6aurg.jpg",
      imageDes:"Wine 101 by Gargi Kothari",
      category:"COURSE"
    },
    {
      card:4,
      commonStat1:'video on demand',
      commonStat2:'watch on insider',
      currency:149,
      image:"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_220/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1674111110%2Fwwixv5xynydjrdu2zhpj.jpg",
      imageDes:"Terence Lewis Dance - Contemporary Tutorial",
      category:"WORKSHOP"
    }];
    // displayFeaturedEvents(featuredEventParent:featuredEvent){
    //     this.Event;
    // }
}


