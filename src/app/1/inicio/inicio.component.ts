import { Component  } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})



export class  InicioComponent {
constructor() { }

   subMenu = [
   {  titulo: 'Fruta', img: 1
   }, {
     titulo: 'Verdura', img: 2
   }, {
     titulo: 'Cereales y leguminosas', img: 3
   }, {
     titulo: 'Alimentos de origen animal', img: 4
   }, {
     titulo: 'Aceites, grasas y azúcares', img: 5
   }, {
     titulo: 'Bebidas alcohólicas', img: 6
   }
 ];
}
