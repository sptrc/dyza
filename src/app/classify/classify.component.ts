import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  HttpClient
} from '@angular/common/http';
import {
  CoreDataService
} from '../core-data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.scss']
})
export class ClassifyComponent implements OnInit {
  id: any;
  algo: any;
  sub: any = [];
  algoav: any;
  msg: any = 'Choose an alogorithm';
  algorithm: any;
  resultset: any;

  constructor(public data: CoreDataService, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.getcol();
    this.getTree();
    this.algos();

  
  
  

  }
  
 downloadInnerHtml(filename, elId, mimeType) {
    var elHtml = document.getElementById(elId).textContent;
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';

    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click(); 
}

  download(){
    var fileName =  'result_'+$.now()+'.txt'; // You can use the .txt extension if you want
    this.downloadInnerHtml(fileName, 'main','text/plain');
  }
  algos() {
    var fd = new FormData;
    fd.append('columnid', this.id);
    this.http.post < any > (this.data.SERVICE + 'checkActivation', fd)
      .subscribe(data => {
        this.algoav = data;
      })
  }
  getcol() {
    this.id = this.route.snapshot.params['id'];
  }

  getTree() {
    this.http.post < any > (this.data.SERVICE + 'classifyTree', '')
      .subscribe(data => {
        this.algo = data;

      })
  }

  match(key) {
    return (this.algoav[key]) ? this.algoav[key] : 'deactive';
  }

  perform(key) {
    this.msg = 'Upload a test file';
    this.algorithm = key;
    this.algos();
    var m = localStorage.getItem('mfile');
    var mrg = m.split('/');
    if (this.algorithm != 'DecisionTable') {
    var obj = {
      "columnid": this.id,
      "companyid": 'tempteam4',
      "filepath": mrg[4]+'/'+mrg[5]
    }
    this.http.post(this.data.SERVICE+this.algorithm,JSON.stringify(obj),{
      responseType:'text',
      headers:{
      'content-Type':'application/json'
    }})
    .subscribe(data=>{
      this.msg = data;
      
    })
    }
  }

  result() {
    if (this.algorithm == 'DecisionTable') {
      var fd = new FormData();
      fd.append('columnid', this.id);
      fd.append('file', $('#testfile')[0].files[0]);
      this.http.post < any > (this.data.SERVICE + this.algorithm, fd)
        .subscribe(data => {
          this.msg = null;
          this.resultset = data;
          console.log(data);
          
        })
    }
  }

}
