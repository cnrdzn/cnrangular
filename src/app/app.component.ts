import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
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
    }
  ];
}
