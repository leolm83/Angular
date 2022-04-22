import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {
  show : boolean = true; 
  name : string ="Leonardo";//normalmente a validação é feita no proprio component.ts
  //não no component.html
  usbName : string ="Linked"
  constructor() { }

  ngOnInit(): void {
  }

}
