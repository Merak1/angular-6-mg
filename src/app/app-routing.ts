import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { InicioComponent } from './1/inicio/inicio.component';
import { InfoComponent } from './2/info/info.component';
import { AboutComponent } from './3/about/about.component';

const appRoutes:Routes = [ 
    {path: '', component : MainComponent},
    {path: 'inicio', component : InicioComponent},
    {path: 'info', component : InfoComponent},
    {path: 'about', component : AboutComponent}
];

export const routing = RouterModule.forRoot(appRoutes);  