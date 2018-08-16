import { Component } from '@angular/core';

@Component({
  selector: 'app-verdura-contenido',
  templateUrl: './verdura-contenido.component.html',
  styleUrls: ['./verdura-contenido.component.css']
})
export class VerduraContenidoComponent  {

  constructor() { }
  VerdurasTipo  =  [{
    titulo: 'Hoja',
    router: 'Hoja',
    img: 'bayas'
     }, {
    titulo: 'Tallo',
    router: 'Tallo',
    img: 'citricos'
    }, {
      titulo: 'Inflorencias',
      router: 'Inflorencias',
      img: 'frutos-secos'
    }, {
      titulo: 'Yemas',
      router:  'Yemas',
      img: 'fruta-dulce'
    }, {
      titulo: 'Exóticas',
      router: 'Exoticas',
      img: 'exoticas'
    }, {
      titulo: 'Cucurbitáceas',
      router: 'Cucurbitáceas',
      img: 'cucurbitaceas'
    }
];
}
