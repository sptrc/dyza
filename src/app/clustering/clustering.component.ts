import {
  Component,
  OnInit
} from '@angular/core';
import * as $ from 'jquery';
import {
  HttpClient
} from '@angular/common/http';
import {
  CoreDataService
} from '../core-data.service';

@Component({
  selector: 'app-clustering',
  templateUrl: './clustering.component.html',
  styleUrls: ['./clustering.component.scss']
})
export class ClusteringComponent implements OnInit {
  clusternumber: any;
  result: any;
  cluster: any;

  constructor(
    private http: HttpClient,
    public data: CoreDataService
  ) {}

  ngOnInit() {}

  clustering(cl) {
    var fd = new FormData();
    fd.append('clusternumber', this.clusternumber);
    fd.append('file', $('.file1')[0].files[0]);

    this.http.post(this.data.SERVICE + cl, fd,{
      responseType: 'text'
    })
      .subscribe(data => {
        this.clusternumber = null;
        this.result = data;
        this.data.alert('alert',cl+' clustering succcessfull','success');
      },error=>{
        this.data.alert('alert','Something Went Wrong','danger');
      })
  }

}
