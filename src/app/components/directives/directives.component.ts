import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  color:string = 'red';
  size:number = 23;
  classeUnica:string="green";
  variasClasses:string[]=["black-background","white","myStyle"];
  constructor() { }

  ngOnInit(): void {
  }

}
