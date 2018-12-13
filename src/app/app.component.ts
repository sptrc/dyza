import { Component } from '@angular/core';
import { CoreDataService } from "./core-data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-admin-angular';
  loginPage: boolean;

  constructor(private data:CoreDataService, private route:Router){
    
    route.events.subscribe(data=>{
      if(this.data.rout()=='/'||this.data.rout()=='/login'||this.data.rout()=='/forgot')
      this.loginPage = true;
      else
      this.loginPage = false;
      
    })

  }
}
