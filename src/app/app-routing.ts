import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';

const appRoutes:Routes = [
    {path: '', component : MainComponent},
    {path: 'inicio', component : InicioComponent},
    {path: 'info', component : InfoComponent},
    {path: 'about', component : AboutComponent}
];

export const routing = RouterModule.forRoot(appRoutes);  