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
  selector: 'app-view-file',
  templateUrl: './view-file.component.html',
  styleUrls: ['./view-file.component.scss']
})
export class ViewFileComponent implements OnInit {
  obj: any;
  ext: any;
  listFiles: any;
  files: any = {};
  merge: any;
  obj2: {
    filepathlist: any;company: any;
  };
  mfile: any;
  result: any;
  inner: any;

  constructor(public data: CoreDataService, private http: HttpClient) {}

  ngOnInit() {
    var m = localStorage.getItem('mfile');
    if(m)
    this.mfile = m;
    else
    this.mfile = false;
  }

  getFiles() {
    this.data.alert('alert', 'Loading...', 'dark');
    this.obj = {
      type: this.ext,
      id: this.data.getData('companydetails', 'companyid'),
      userid: localStorage.getItem('userid')
    }

    this.http.post < any > (this.data.SERVICE + 'listFile', JSON.stringify(this.obj), {
        headers: {
          'content-Type': 'application/json'
        }
      })
      .subscribe(data => {
        this.listFiles = data;
        this.data.cat = false;
      }, error => {
        this.data.alert('alert', 'Something Went Wrong', 'danger');
      })

  }

  selected() {
    this.merge = (this.files.length >= 2) ? true : false;
  }

  mergeFiles() {
    this.data.alert('alert', 'Loading...', 'dark');
    this.obj2 = {
      filepathlist: this.files,
      company: this.data.getData('companydetails', 'companyid')
    };

    this.http.post(this.data.SERVICE + 'margeFiles', JSON.stringify(this.obj2), {
        responseType: 'text',
        headers: {
          'content-Type': 'application/json'
        }
      })
      .subscribe(data => {
        if(data=='failure'){
          this.data.alert('alert', 'Something Went Wrong', 'danger');
        }
        else{
          this.mfile = data;
          this.data.cat = false;
          localStorage.setItem('mfile',this.mfile);
        }

      }, error => {
        this.data.alert('alert', 'Something Went Wrong', 'danger');
      })
  }

  preproFile(){
    this.data.alert('alert','Loading...','dark');
    var mrg = this.mfile.split('/');
    var obj = {
      id: 'tempteam4',
      filepath: mrg[4]+'/'+mrg[5]
    }
    this.http.post<any>(this.data.SERVICE+'preprocessFile',JSON.stringify(obj),{headers:{
      'content-Type': 'application/json'
    }})
    .subscribe(data=>{
      this.result = data;
      this.data.cat = false;   
    }, error => {
      this.data.alert('alert', 'Something Went Wrong', 'danger');
    })
  }

  detail(obj){
    this.inner = obj.inner.replace(/{|}/g,'').split(',');
  }
}
