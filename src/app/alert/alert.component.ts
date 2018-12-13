import { Component, OnInit } from '@angular/core';
import { CoreDataService } from '../core-data.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {


  constructor( public data:CoreDataService) { }

  ngOnInit() {
    // this.show('alert','deded','info');
  }


}
