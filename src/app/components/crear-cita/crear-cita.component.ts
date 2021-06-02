import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent {

  public nombre='';
  public fecha='';
  public hora='';
  public sintomas='';

  public formularioincorrecto=false;
  @Output() nuevaCita = new EventEmitter<any>();

  agregarCita(){

    if(this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == ''){

    this.formularioincorrecto = true;
    return
  }

  this.formularioincorrecto = false;

  // Creamos objetos para enviarselos al padre

  const CITA = {
     nombre: this.nombre,
     fecha:this.fecha,
     hora:this.hora,
     sintomas:this.sintomas
  }

  this.nuevaCita.emit(CITA);
  this.resetCampos();

  }

  resetCampos(){

    this.nombre='';
    this.fecha='';
    this.hora='';
    this.sintomas=''; 
  }




}
