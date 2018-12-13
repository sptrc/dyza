import { Component, OnInit } from '@angular/core';
import { CoreDataService } from '../core-data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  com:any = {
    parent:"0",
    payday:"7",
    status:"active"
  };
  mode: string = 'add';


  constructor(public data:CoreDataService, private http:HttpClient, private route:Router) { }

  ngOnInit() {
    var d:any  = localStorage.getItem('userdetails');
    d = JSON.parse(d);
    var c:any  = localStorage.getItem('companydetails');
    c = JSON.parse(c);
    if(d.role!='Super Admin'){
    this.com = c;
    this.mode = 'update';
    }
  }

  create(){
    this.http.post<any>(this.data.SERVICE+'createCompany',JSON.stringify(this.com),{headers:{
      'content-Type':'application/json'
    }})
    .subscribe(data=>{
      this.com = null;
      this.data.getAllCompany();
      this.data.alert('alert','Company created successfuly','success');
    },error=>{
      this.data.alert('alert','Something went wrong','danger');
    })
  }

  update(){
    var d:any  = localStorage.getItem('userdetails');
    d = JSON.parse(d);
    this.http.post<any>(this.data.SERVICE+'updateUser',JSON.stringify(this.com),{headers:{'content-Type':'application/json'}})
    .subscribe(data=>{
      this.data.alert('alert','Company updated successfuly','success');
      this.data.getUserInfo(d.userid);
      this.route.navigateByUrl('/user');
    },error=>{
      this.data.alert('alert','Something went wrong','danger');
    }) 
      
  }

  delete(){
    this.data.alert('confirm','Deletaion will be terminate company parmanently. Are you sure?','warning',10000);
     this.data.to = setTimeout(()=>{
    this.http.post(this.data.SERVICE+'deleteUser',JSON.stringify({"id":this.com.id}),{headers:{
      'content-Type':'application/json'
    },responseType:'text'})
    .subscribe(data=>{
      if(data=='success'){
      this.data.alert('alert','Company deleted successfuly','success');
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
