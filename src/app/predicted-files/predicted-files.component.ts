import {
  Component,
  OnInit
} from '@angular/core';
import {
  CoreDataService
} from '../core-data.service';
import {
  HttpClient
} from '@angular/common/http';

@Component({
  selector: 'app-predicted-files',
  templateUrl: './predicted-files.component.html',
  styleUrls: ['./predicted-files.component.scss']
})
export class PredictedFilesComponent implements OnInit {
  ext: any;
  result: any;

  constructor(public data: CoreDataService, private http: HttpClient) {}

  ngOnInit() {}

  get() {
    var obj = {
      "companyname": this.data.getData('companydetails','name'),
      "userid": localStorage.getItem('userid'),
      "type": this.ext
    }

    this.http.post<any>(this.data.SERVICE+'listPredictedFile',JSON.stringify(obj),{
      headers:{
        'content-Type':'application/json'
      }
    })
    .subscribe(data=>{
      this.result = data;
      this.data.alert('alert','File shown successfuly','success');
    },error=>{
      this.data.alert('alert','Something Went Wrong','danger');
    })
  }

}
