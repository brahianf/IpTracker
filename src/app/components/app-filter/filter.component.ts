import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class AppFilter {
    
  keysearch: string;
  @Output() searchClicked: EventEmitter<any> = new EventEmitter();

  clickSearch() {
    this.searchClicked.emit(this.keysearch);
  }
}
