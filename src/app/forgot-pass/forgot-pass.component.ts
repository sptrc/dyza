import { Component, OnInit } from '@angular/core';
import { CoreDataService } from '../core-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {
  msg: any;
  mail: any;
  estr: string;
  userid: any;

  constructor(public data:CoreDataService, private http:HttpClient) { }

  ngOnInit() {
  }

  getmail(event){
    this.http.post<any>(this.data.SERVICE+'getUserDetailsByUserid',JSON.stringify({userid: event.target.value}),{
      headers:{
        'content-Type':'application/json'
      }
    })
    .subscribe(data=>{
var m = data.email;
m = m.toString();
var l = m.length;
var str = 'x';
this.estr = m.substring(0,4)+str.repeat((l-4)-4)+m.substring(l-4,l);
    },error=>{
    })
  }

}
