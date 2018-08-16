import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-contenido',
  templateUrl: './animal-contenido.component.html',
  styleUrls: ['./animal-contenido.component.css']
})
export class AnimalContenidoComponent  {

  constructor() { }
  AlimentosCarneTipo  =  [{
    titulo: 'Muy Bajo en grasa',
    router: 'Muy Bajo en grasa',
    img: 'Muy-Bajo-grasa'
     }, {
    titulo: 'Bajo en grasa',
    router: 'Bajo en grasa',
    img: 'Bajo-grasa'
    }, {
      titulo: 'Moderado en grasa',
      router: 'Moderado en grasa',
      img: 'Moderado-grasa'
    }, {
      titulo: 'Alto en grasa',
      router:  'Alto en grasa',
      img: 'Alto-grasa'
    }
];
}
