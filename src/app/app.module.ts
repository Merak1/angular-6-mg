import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';

import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { InfoComponent } from './2/info/info.component';
import { InicioComponent } from './1/inicio/inicio.component';
import { BubbleComponent } from './bubble/bubble.component';
import { InicioTopComponent } from './1/inicio-top/inicio-top.component';
import { FrutaComponent } from './1/fruta/fruta.component';
import { VerduraComponent } from './1/verdura/verdura.component';
import { CerealesComponent } from './1/cereales/cereales.component';
import { OrigAnimalComponent } from './1/orig-animal/orig-animal.component';
import { GrazucarComponent } from './1/grazucar/grazucar.component';
import { AlcoholComponent } from './1/alcohol/alcohol.component';
import { VarTopComponent } from './var-top/var-top.component';
import { FrutaContenidoComponent } from './1/fruta/fruta-contenido/fruta-contenido.component';
import { VerduraContenidoComponent } from './1/verdura/verdura-contenido/verdura-contenido.component';
import { GrazucarContenidoComponent } from './1/grazucar/grazucar-contenido/grazucar-contenido.component';
import { CerealesContenidoComponent } from './1/cereales/cereales-contenido/cereales-contenido.component';
import { AnimalContenidoComponent } from './1/orig-animal/animal-contenido/animal-contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    InicioComponent,
    MainComponent,
    BubbleComponent,
    InicioTopComponent,
    FrutaComponent,
    VerduraComponent,
    CerealesComponent,
    OrigAnimalComponent,
    GrazucarComponent,
    AlcoholComponent,
    VarTopComponent,
    FrutaContenidoComponent,
    VerduraContenidoComponent,
    GrazucarContenidoComponent,
    CerealesContenidoComponent,
    AnimalContenidoComponent

  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {





}
