import { Component, OnInit } from '@angular/core';
import { CoreDataService } from '../core-data.service';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-upload-result',
  templateUrl: './upload-result.component.html',
  styleUrls: ['./upload-result.component.scss']
})
export class UploadResultComponent implements OnInit {
  ext: any;

  constructor(public data:CoreDataService, private http:HttpClient) { }

  ngOnInit() {
  }

  upload(){
    var fd = new FormData();
    fd.append('id',this.data.getData('companydetails','companyid'));
    fd.append('userid',localStorage.getItem('userid'));
    fd.append('type', this.ext);
    fd.append('file',$('.file')[0].files[0]);
    fd.append('email',this.data.getData('userdetails','email'));

    this.http.post(this.data.SERVICE+'savePredictFile',fd,{
      responseType:'text'
    })
    .subscribe(data=>{
      if(data=='success')
      this.data.alert('alert','File Uploaded Successfuly','success');
      else
      this.data.alert('alert','Something Went Wrong','danger');
    },error=>{
      this.data.alert('alert','Something Went Wrong','danger');
    })
  }

}
