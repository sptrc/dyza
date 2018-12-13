import { Component, OnInit } from '@angular/core';
import { CoreDataService } from '../core-data.service';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  ext: any;

  constructor(public data:CoreDataService, private http:HttpClient) { }

  ngOnInit() {
  }

  upload(){
    var fd= new FormData();
    fd.append('file',$('.file')[0].files[0]);
    fd.append('userid',localStorage.getItem('userid'));
    fd.append('type',this.ext);
    fd.append('id',this.data.getData('companydetails','companyid'));
    fd.append('email',this.data.getData('userdetails','email'));

    this.http.post(this.data.SERVICE+'uploadFile',fd,{responseType:'text'})
    .subscribe(data=>{
      if(data=='success'){
        this.data.alert('alert','File Uploaded Succesfuly','success');
      }
      else{
        this.data.alert('alert','Something Went Wrong','danger');
      }
      
    })
    
    
    
  }

}
