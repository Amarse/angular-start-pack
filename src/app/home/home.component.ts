import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  title:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen',title:"board1"},
  {position: 2, name: 'Helium',title:"board1"},
  {position: 3, name: 'Lithium',title:"board1"},
  {position: 4, name: 'Beryllium',title:"board1"},
  {position: 5, name: 'Boron',title:"board1"},
  {position: 6, name: 'Carbon',title:"board1"},
  {position: 7, name: 'Nitrogen',title:"board1"},
  {position: 8, name: 'Oxygen',title:"board1"},
  {position: 9, name: 'Fluorine',title:"board1"},
  {position: 10, name: 'Neon',title:"board1"},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'title', 'name'];
  dataSource = ELEMENT_DATA;
  constructor() {
  
   }

  ngOnInit(): void {

  }

}
