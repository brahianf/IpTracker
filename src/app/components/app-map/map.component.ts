import { Component, AfterViewInit, Input} from '@angular/core';
import * as L from 'leaflet';
import { Geo } from '../../interfaces/geo.interface';
import { GeoService } from '../../services/geo-service/geo.service';
const iconUrl = '../../../assets/images/icon-location.svg';

const iconDefault = L.icon({
  iconUrl,
  iconSize: [30, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class AppMap implements AfterViewInit {

  private map;
  @Input() data$: Geo;

  constructor(
    private geoService: GeoService
  ) { }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 37.38605 , -122.08385 ],
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.geoService.makeCapitalMarkers(this.map);
  }
}
