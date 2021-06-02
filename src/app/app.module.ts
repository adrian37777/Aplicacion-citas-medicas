import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CitasComponent } from './components/citas/citas.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    CitasComponent,
    CrearCitaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
