import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { InicioComponent } from './1/inicio/inicio.component';
import { InfoComponent } from './2/info/info.component';
import { AboutComponent } from './3/about/about.component';
import { FrutaComponent } from './1/fruta/fruta.component';
import { VerduraComponent } from './1/verdura/verdura.component';
import { CerealesComponent } from './1/cereales/cereales.component';
import { OrigAnimalComponent } from './1/orig-animal/orig-animal.component';
import { GrazucarComponent } from './1/grazucar/grazucar.component';
import { AlcoholComponent } from './1/alcohol/alcohol.component';

const appRoutes: Routes = [
    {path: '', component : MainComponent},
    {path: 'inicio', component : InicioComponent},
    {path: 'info', component : InfoComponent},
    {path: 'about', component : AboutComponent},
    {path: 'fruta' , component: FrutaComponent},
    {path: 'verdura' , component: VerduraComponent},
    {path: 'cereales-y-leguminosas' , component: CerealesComponent},
    {path: 'alimentos-de-origen-animal' , component: OrigAnimalComponent},
    {path: 'aceites-grasas-y-azucares' , component: GrazucarComponent},
    {path: 'alcohol' , component: AlcoholComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
