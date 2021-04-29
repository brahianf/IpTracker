import { Component, Input } from '@angular/core';
import { Geo } from '../../interfaces/geo.interface';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})

export class AppTracker {
    
  labels = ['ip address', 'location', ' timezone', 'isp'];
  @Input() data$: Geo;

}
