import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  moviesArr: any[] = [
    {
      "title": "Super Man"
    },
    {
      "title": "Spider Man"
    },
    {
      "title": "Aladdin"
    }, 
    {
      "title": "Downton Abbey"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
