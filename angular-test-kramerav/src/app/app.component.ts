import { Component, OnInit } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { DeviceCard } from './models/DeviceCard';
import { StabDataService } from './services/stab-data-servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public devices: Array<DeviceCard> = [];
  public filter: string = '';
  public settingsLoaded: boolean = false;
  title = 'angular-test-kramerav';
  constructor(private stabDataService: StabDataService) { }

  ngOnInit() {

    this.fetchSettings();
  }

  onKeyUpEvent(event: any) {
    this.filter = event.target.value.toLowerCase();
    this.fetchSettings();// it is local
  }
  fetchSettings() {
    let lobbyData = this.stabDataService.getDeviceList();
    this.devices = lobbyData.devices;
    if (this.filter.length > 0) {
      this.devices = this.devices.filter(item => (item.Name.toLowerCase()).indexOf(this.filter) > -1)
    }

  }

}
