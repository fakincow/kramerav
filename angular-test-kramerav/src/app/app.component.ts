import { Component, OnInit } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { DeviceCard } from './models/DeviceCard';
import { StabDataService } from './services/stab-data-servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public devices: Array<DeviceCard> = [];
  public settingsLoaded: boolean = false;
  title = 'angular-test-kramerav';
  constructor(private stabDataService : StabDataService) { }

  ngOnInit() {

    this.fetchSettings();
  }

  fetchSettings() {
    let lobbyData =  this.stabDataService.getDeviceList();
   console.log('>>>>>>', lobbyData)
   this.devices = lobbyData.devices;
   console.log('>dddd>>>>>', this.devices)
    setTimeout(() => { this.settingsLoaded = true }, 1500);
  }

}
