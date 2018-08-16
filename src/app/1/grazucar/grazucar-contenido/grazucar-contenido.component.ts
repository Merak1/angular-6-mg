import { Component} from '@angular/core';

@Component({
  selector: 'app-grazucar-contenido',
  templateUrl: './grazucar-contenido.component.html',
  styleUrls: ['./grazucar-contenido.component.css']
})
export class GrazucarContenidoComponent  {

  constructor() { }
  GrazucarTipo  =  [{
    titulo: 'Aceites y Grasas',
    router: 'Aceites y Grasas',
    img: 'aceite-y-grasa'
     }, {
    titulo: 'Azúcar',
    router: 'Azúcar',
    img: 'azucar'
    }
];
}
