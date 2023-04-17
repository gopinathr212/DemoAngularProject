import { Component, Input } from '@angular/core';
import { workshop } from '../workshopInterface';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent {

  @Input() workShop:workshop[] | undefined;
 
}
