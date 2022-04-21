import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name : string="Leolm";
  age : number=22;
  job : string = "Freelancing Programmer";
  hobbies: string[] = ["Read","Play","Learn"];  
  car = {
    name:"Lambo",
    year:2034
  }
  constructor() { }

  ngOnInit(): void {
  }

}
