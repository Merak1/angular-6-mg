import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class  BubbleComponent {
  
  


  @Input() menuItems: string;
  @Input() menuLink: number;
  @Input() menuRouter: string;
  constructor() { }

  }
