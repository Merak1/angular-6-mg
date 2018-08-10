import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor() {}
  Menu = [{
    titulo: 'Iniciar',
    img: 1,
    router: 'inicio'
  }, {
    titulo: 'Info',
    img: 2,
    router: 'info'
  }, {
    titulo: 'About',
    img: 3,
    router: 'about'
  }];
}
