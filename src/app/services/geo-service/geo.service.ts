import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Geo } from '../../interfaces/geo.interface';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})

export class GeoService {

  private data$: Geo;

  constructor(
    private http: HttpClient,
  ) { }

  getIp(id: string) {
    return this.http.get<Geo>(`${environment.API.URL}v1?apiKey=${environment.API.apiKey}&ipAddress=${id}&domain=${id}`);
  }

  setLocation(data: Geo){
    this.data$ = data;
  }

  makeCapitalMarkers(map: L.map): void {
    const marker = L.marker([ this.data$.location.lat, this.data$.location.lng ]);
    marker.addTo(map);
  }
}