import { Component, OnInit, Input } from '@angular/core';
import { DeviceCard } from 'src/app/models/DeviceCard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() name: String = 'name goes here';
  @Input() NativeResolution:string="device.NativeResolution"
  @Input() Size:number=0
  @Input() status:number =0

}
