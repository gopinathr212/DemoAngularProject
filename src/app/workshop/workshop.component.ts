import { Component } from '@angular/core';
import { workshop } from '../workshopInterface';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent {

  workShop:workshop[] =[{
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
}
