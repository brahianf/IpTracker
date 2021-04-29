import { Component, OnInit } from '@angular/core';
import { Geo } from '../../interfaces/geo.interface';
import { GeoService } from '../../services/geo-service/geo.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})

export class AppRoot implements OnInit {
  
  title: string = 'IP Address Tracker';
  ip: string = '8.8.8.8';
  domain: string;
  data$: Geo;
  private map;
  
  constructor(
    private geoService: GeoService
  ) { }

  ngOnInit() {
    this.fetchData();
  }

  searchClicked(ip: string) {
    if(ip===undefined){
      alert('key ip or domain');
    } else {
      this.ip = ip;
      this.fetchData();
    }
  }

  fetchData() {
    this.geoService.getIp(this.ip)
    .subscribe(data => {
      this.data$ = data;
      this.geoService.setLocation(this.data$);
    });
  }
}
