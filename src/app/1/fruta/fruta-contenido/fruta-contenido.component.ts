import { Component } from '@angular/core';

@Component({
  selector: 'app-fruta-contenido',
  templateUrl: './fruta-contenido.component.html',
  styleUrls: ['./fruta-contenido.component.css']
})
export class FrutaContenidoComponent  {

  constructor() { }
  FrutasTipo = [{
    titulo: 'Bayas',
    router: 'Bayas',
    img: 1
    }, {
    titulo: 'Cítricos',
    router: 'Cítricos',
    img: 2
    }, {
      titulo: 'Frutos secos',
      router: 'Frutos secos',
      img: 3
    }, {
      titulo: 'Fruta dulce',
      router:  'Fruta dulce',
      img: 4
    }, {
      titulo: 'Exóticas',
      router: 'Exóticas',
      img: 5
    }, {
      titulo: 'Cucurbitáceas',
      router: 'Cucurbitáceas',
      img: 6
    }
];
}
