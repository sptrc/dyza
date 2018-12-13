import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoreDataService {

  SERVICE:any = 'http://18.212.49.51:9090/';
  userid: string;
  role: any;
  user: any;
  state: any;
  cat: any;
  msg: any;
  companyList: any;
  roles:any = ['viewer','analytics consumer','analyst','back office','admin'];
  types:any = ['individual','corporate'];
  extensions:any = ['csv','invoiceA','sampleFileA'];
  activated: any;
  sure:boolean = false;
  to: any;
  alertTime: number;
  tox: any;
  company: any;

  constructor(private route:Router, private http:HttpClient) {
    this.userid = localStorage.getItem('userid');
    if(this.userid){
    this.getUserInfo(this.userid);
    this.getAllCompany();
    this.getUserData();
    }
   }

   rout(){
    return this.route.url;
   }

   getData(param,val){
     var d = JSON.parse(localStorage.getItem(param));
     return d[val];
   }

   getUserData(){
    return JSON.parse(localStorage.getItem('userdetails'));
    // return this.user;
   }

   getUserInfo(id){
    this.http.post<any>(this.SERVICE+'getUserDetailsByUserid',{"userid":id})
    .subscribe(data=>{
      this.role = data.role;
      this.user = data;
      this.getCompanyById(data.company);
      localStorage.setItem('userdetails',JSON.stringify(data));
    },error=>{
      console.log('error');
      
    })
   }

   getAllCompany(){
    this.http.post<any>(this.SERVICE+'getAllCompany','')
    .subscribe(data=>{
      this.companyList = data;
    })
  }

  getCompanyById(comp){
    this.http.post<any>(this.SERVICE+'getAllCompany','')
    .subscribe(data=>{
      function us(arr){
        return arr.id == comp;
      }
      var d = data.find(us);
      localStorage.setItem('companydetails',JSON.stringify(d));
    })
  }



   logout(){
     localStorage.clear();
     this.route.navigateByUrl('/login');
   }

   
  alert(category,msg,state,timeout=3000){
    this.cat = category;
    this.msg = msg;
    this.state = state;
    this.alertTime = timeout/1000;
    if(this.cat=='confirm')
    this.tox = setInterval(()=>{
      this.alertTime--;
    },1000);

    this.to = setTimeout(() => {
      this.cat = null;
      clearInterval(this.tox);
    }, timeout);
  }

  clear(){
    clearTimeout(this.to);
    clearInterval(this.tox);
    this.cat = null;
  }
}
