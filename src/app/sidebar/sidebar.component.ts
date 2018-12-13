import { Component, OnInit } from '@angular/core';
import { CoreDataService } from '../core-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
  menuList:any = [
    {name:'User', link:'/user', icon:'mdi-account'},
    {name:'Company', link:'/company', icon:'mdi-domain'},
    {name:'File Upload', link:'/uploadFile', icon:'mdi-cloud-upload'},
    {name:'View File', link:'/viewFile', icon:'mdi-file'},
    {name:'Result Upload', link:'/uploadResult', icon:'mdi-cloud-upload'},
    {name:'Predicted File', link:'/predictedFiles', icon:'mdi-file'},
    {name:'Clustering', link:'/clustering', icon:'mdi-all-inclusive'},
  /*  {name:'Dashboard', link:'/dashboard', icon:'mdi-television'}, //demo
    {name:'Form elements', link:'/forms', icon:'mdi-notification-clear-all'},
    {name:'Buttons', link:'/buttons', icon:'mdi-dna'},
    {name:'Progress bar', link:'/progressbar', icon:'mdi-trackpad'},
    {name:'Carousal', link:'/carousel', icon:'mdi-texture'},
    {name:'Tooltip', link:'/tooltips', icon:'mdi-content-copy'},
    {name:'Tabs', link:'/tabs', icon:'mdi-lightbulb-outline'},
    {name:'Dropdown', link:'/dropdowns', icon:'mdi-backup-restore'},
    {name:'Breadcrumb', link:'/breadcrumbs', icon:'mdi-flag-outline'},
    {name:'Pagination', link:'/pagination', icon:'mdi-loupe'},
    {name:'Tables', link:'/tables', icon:'mdi-table'},
    {name:'Alerts', link:'/alerts', icon:'mdi-shield-outline'},
    {name:'Accordion', link:'/accordions', icon:'mdi-altimeter'},
    {name:'Badges', link:'/badges', icon:'mdi-checkbox-multiple-blank-circle-outline'},
    {name:'Icons', link:'/icons', icon:'mdi-chart-bubble'},
    {name:'Typography', link:'/typography', icon:'mdi-format-italic'},*/
  ];

  constructor(public data:CoreDataService) {
   }

  ngOnInit() {
    // this.data.getUserInfo();
  }

}
