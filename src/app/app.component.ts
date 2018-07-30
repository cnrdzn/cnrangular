import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import { forOwn } from 'lodash';

interface GitHub {
  type: string;
  repo:string;
  payload:string;
}

interface Dribbble {
  id:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  github$: Observable<GitHub[]>;
  
  shots$: Observable<Dribbble[]>;

  url = "https://api.github.com/users/cnrdzn/events";




  constructor(private http:HttpClient) {

  }
  ngOnInit() {


        this.github$ = this.http
        .get<GitHub[]>("https://api.github.com/users/cnrdzn/events")
        .map(data => forOwn(data))
      
        this.shots$ = this.http
        .get<Dribbble[]>("https://api.dribbble.com/v2/user/shots?access_token=9b2e2043a2d36bf62d82756dbb65d63ecd91846b1a154aa2e0acb3e93e021a53")
        .map(data => forOwn(data))
        .do(data => console.log(data));

  }

  works = [
    {
    "index": 1,
    "date": "14.03.2018",
    "title": "Hava Kirlilik İzleme Sistemi",
    "image": "proje6.jpg"
    },
    {
    "index": 2,
    "date": "15.03.2018",
    "title": "Onursal Hukuk Bürosu Logo Tasarımı",
    "image": "proje2.jpg"
    },
    {
    "index": 3,
    "date": "16.03.2018",
    "title": "Etkileşimli Sınıf Yönetimi Uygulaması",
    "image": "proje3.jpg"
    },
    {
    "index": 4,
    "date": "17.03.2018",
    "title": "Tribün 12 Web Uygulaması",
    "image": "proje7.jpg"
    },
    {
    "index": 5,
    "date": "17.03.2018",
    "title": "Polis Telsizi Dinleme Uygulaması",
    "image": "proje8.jpg"
    },
    {
    "index": 6,
    "date": "17.03.2018",
    "title": "Kirlilik Bildirimi Uyglaması",
    "image": "proje5.jpg"
    }
  ];
}
