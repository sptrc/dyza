import { Component, OnInit } from '@angular/core';
import { CoreDataService } from '../core-data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  log: any = {};
  errormsg: string = null;
  captcha: string;

  constructor(public data: CoreDataService, private route:Router, private http:HttpClient) { }

  ngOnInit() {
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.captcha = captchaResponse;
}

  login(){
    if(this.captcha){
    this.http.post(this.data.SERVICE+'login',JSON.stringify(this.log),
    {
      headers:{'content-Type':'application/json'},
      responseType: 'text'
  })
    .subscribe(data=>{
      if(data=='success'){
        this.data.getUserInfo(this.log.userid);
        this.route.navigateByUrl('/user');
        localStorage.setItem('userid',this.log.userid);
        location.reload();
      }
      else{
        this.errormsg = 'Userid or password invalid';
      }
    })
  }
  else{
    this.errormsg = 'Please validate captcha';
  }
}
}
