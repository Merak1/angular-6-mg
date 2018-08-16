import { Component } from '@angular/core';

@Component({
  selector: 'app-fruta-contenido',
  templateUrl: './fruta-contenido.component.html',
  styleUrls: ['./fruta-contenido.component.css']
})
export class FrutaContenidoComponent  {

  constructor() { }
  FrutasTipo  =  [{
    titulo: 'Bayas',
    router: 'Bayas',
    img: 'bayas'
     }, {
    titulo: 'Cítricos',
    router: 'Cítricos',
    img: 'citricos'
    }, {
      titulo: 'Frutos secos',
      router: 'Frutos secos',
      img: 'frutos-secos'
    }, {
      titulo: 'Fruta dulce',
      router:  'Fruta dulce',
      img: 'fruta-dulce'
    }, {
      titulo: 'Exóticas',
      router: 'Exóticas',
      img: 'exoticas'
    }, {
      titulo: 'Cucurbitáceas',
      router: 'Cucurbitáceas',
      img: 'cucurbitaceas'
    }
];
}
