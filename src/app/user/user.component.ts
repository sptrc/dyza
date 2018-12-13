import { Component, OnInit } from '@angular/core';
import { CoreDataService } from '../core-data.service';
import { AlertComponent } from '../alert/alert.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user:any = {
    status: 'active'
  };
  user2:any;
  mode: string = 'add';
  constructor(public data:CoreDataService,private http:HttpClient,private route:Router) { }

  ngOnInit() {
    var d:any  = this.data.getUserData();
    console.log(d);
    
    if(d.role!='Super Admin'){
    this.user = d;
    this.mode = 'update';
    }
  }

  create(){
    this.user2 = {
      "level": 1,
      "parent":'',
      "passChange": false,
      "password": "0000" //default pass
    }
    this.user = Object.assign(this.user, this.user2);
    this.http.post<any>(this.data.SERVICE+'createUser',JSON.stringify(this.user),{headers:{'content-Type':'application/json'}})
    .subscribe(data=>{
      this.data.alert('alert','User created successfuly','success');
    },error=>{
      this.data.alert('alert','Something went wrong','danger');
    }) 
  }

  update(){
    var d:any  = localStorage.getItem('userdetails');
    d = JSON.parse(d);
    this.user2 = {
      "level": d.level,
      "parent":'',
      "passChange": d.passChange,
      "password": d.password //default pass
    }
    this.user = Object.assign(this.user, this.user2);
    this.http.post<any>(this.data.SERVICE+'updateUser',JSON.stringify(this.user),{headers:{'content-Type':'application/json'}})
    .subscribe(data=>{
      this.data.alert('alert','User updated successfuly','success');
      this.data.getUserInfo(d.userid);
      this.route.navigateByUrl('/user');
    },error=>{
      this.data.alert('alert','Something went wrong','danger');
    }) 
      
  }

  delete(){
    this.data.alert('confirm','Deletaion will be terminate your account parmanently. Are you sure?','warning',10000);
     this.data.to = setTimeout(()=>{
    this.http.post(this.data.SERVICE+'deleteUser',JSON.stringify({"userid":this.user.userid}),{headers:{
      'content-Type':'application/json'
    },responseType:'text'})
    .subscribe(data=>{
      if(data=='success'){
      this.data.alert('alert','User deleted successfuly','success');
      setTimeout(() => {
        this.data.logout();
      }, 1000);
      }
      else{
      this.data.alert('alert','Something went wrong','warning');
      }
    },error=>{
      this.data.alert('alert','Something went wrong','warning');
    })
  },10000)
  }

}
