import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-top',
  templateUrl: './inicio-top.component.html',
  styleUrls: ['./inicio-top.component.css']
})
export class InicioTopComponent  {

  subMenu = [{
    titulo: 'Fruta',
    img: 1,
    router: 'fruta'
  }, {
    titulo: 'Verdura',
    img: 2,
    router: 'verdura'
  }, {
    titulo: 'Cereales y leguminosas',
    img: 3,
    router: 'cereales-y-leguminosas'
  }, {
    titulo: 'Alimentos de origen animal',
    img: 4,
    router: 'alimentos-de-origen-animal'
  }, {
    titulo: 'Aceites, grasas y azúcares',
    img: 5,
    router: 'aceites-grasas-y-azucares'
  }, {
    titulo: 'Bebidas alcohólicas',
    img: 6,
    router: 'alcohol'
  }];

  constructor() { }


}
