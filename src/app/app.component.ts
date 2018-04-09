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

interface Twitter {
  title: string;
  id:string;
  body:string;
  userId;string;
}

interface Instagram {
  display_url: string;
  logging_page_id:string;
  id:string;
  __typename:string;
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

  tweets$: Observable<Twitter[]>;
  
  screens$: Observable<Instagram[]>;

  shots$: Observable<Dribbble[]>;

  url = "https://api.github.com/users/cnrdzn/events";




  constructor(private http:HttpClient) {

  }
  ngOnInit() {

      const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + 'b0ea3a8693440251d230835765903fd85c7c89698d81e4a66817c1887a8f7f5b');

      this.github$ = this.http
          .get<GitHub[]>("https://api.github.com/users/cnrdzn/events")
          .map(data => forOwn(data))
          
      this.tweets$ = this.http
          .get<Twitter[]>("https://jsonplaceholder.typicode.com/posts")
          .map(data => data.filter(value => value.userId == '1'))    
        
      this.screens$ = this.http
          .get<Instagram[]>("https://www.instagram.com/cnr.design.tr/?__a=1")
          .map(data => forOwn([data]))

          this.shots$ = this.http
          .get<Dribbble[]>("https://api.dribbble.com/v2/shots/471756",{headers})
          .map(data => forOwn(data))

          //jqxhr.setRequestHeader('Authorization', 'Bearer ' + ACCESS_TOKEN);
          /*.map(data => {
            let results = [];
            data['graphql'].forEach(item => {
              results = results.concat(item['biography'].map(data => {
                return {
                 'parentId': item.user,
                //  'name': child.name,
                };
              }));
            });
        
            return results;
          })*/
          //.map(data => data.filter(value => value.graphql.user.edge_owner_to_timeline_media.edges[0].node.__typename == 'GraphImage'))
          .do(data => console.log(data));

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
