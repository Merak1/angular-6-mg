import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cereales-contenido',
  templateUrl: './cereales-contenido.component.html',
  styleUrls: ['./cereales-contenido.component.css']
})
export class CerealesContenidoComponent  {

  constructor() { }
  CerealesTipo  =  [{
    titulo: 'Cereales y tuberculos',
    router: 'Cereales y tuberculos',
    img: 'cereales-y-tuberculos'
     }, {
    titulo: 'Leguminosas',
    router: 'Leguminosas',
    img: 'leguminosas'
    }
];
}