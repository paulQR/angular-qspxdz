import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from'./components/protegida/protegida.component';

// importar rutas
import { APP_ROUTING } from "./app.routes";

@NgModule({
  imports:      [ BrowserModule, FormsModule, APP_ROUTING ],
  declarations: [ AppComponent, HelloComponent, HomeComponent,NavbarComponent, PreciosComponent, ProtegidaComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
