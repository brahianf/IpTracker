import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from './environments/environment'

import { AppRoot } from './app/components/app-root/root.component';
import { AppFilter } from './app/components/app-filter/filter.component';
import { AppTracker } from './app/components/app-tracker/tracker.component';
import { AppMap } from './app/components/app-map/map.component';

import { GeoService } from './app/services/geo-service/geo.service';

@NgModule({
  declarations: [
    AppRoot,
    AppFilter,
    AppTracker,
    AppMap
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [GeoService],
  bootstrap: [AppRoot]
})
export class AppModule { }
