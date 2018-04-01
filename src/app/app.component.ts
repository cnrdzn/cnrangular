import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import { forOwn } from 'lodash';


interface GitHub {
  type: string;
  repo:string;
  payload:string;
}

interface Posts {
  title: string;
  id:string;
  body:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  github$: Observable<GitHub[]>;

  posts$: Observable<Posts[]>;
  constructor(private http:HttpClient) {
  }

  ngOnInit() {
      this.github$ = this.http
          .get<GitHub[]>("https://api.github.com/users/cnrdzn/events")
          .map(data => forOwn(data))
          
      this.posts$ = this.http
      .get<Posts[]>("https://jsonplaceholder.typicode.com/posts")
      .map(data => forOwn(data))          
  }

  works = [
    {
    "index": 1,
    "date": "14.03.2018",
    "title": "proje 1",
    "image": "proje1.jpg"
    },
    {
    "index": 2,
    "date": "15.03.2018",
    "title": "proje 2",
    "image": "proje2.jpg"
    },
    {
    "index": 3,
    "date": "16.03.2018",
    "title": "proje 3",
    "image": "proje3.jpg"
    },
    {
    "index": 4,
    "date": "17.03.2018",
    "title": "proje 4",
    "image": "proje4.jpg"
    },
    {
    "index": 5,
    "date": "17.03.2018",
    "title": "proje 5",
    "image": "proje5.jpg"
    }
  ];
}
