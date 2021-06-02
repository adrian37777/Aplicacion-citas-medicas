import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {

  @Input() listadoCitas: any;
  @Output() deleteCita = new EventEmitter<number>();


  eliminarCita(index:number){

    this.deleteCita.emit(index);

  }

}
