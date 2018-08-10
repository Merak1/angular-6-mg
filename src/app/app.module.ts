import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';

import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { InfoComponent } from './2/info/info.component';
import { InicioComponent } from './1/inicio/inicio.component';
import { AboutComponent } from './3/about/about.component';
import { BubbleComponent } from './bubble/bubble.component';
import { InicioTopComponent } from './1/inicio-top/inicio-top.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    InicioComponent,
    AboutComponent,
    MainComponent,
    BubbleComponent,
    InicioTopComponent

  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
