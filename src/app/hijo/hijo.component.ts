import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  //Recibe le dato del padre
  @Input() datoHijo: string  = 'Vacio';

  //DEFINE (no lanza) un evento al padre
  @Output() meHanHechoClick = new EventEmitter<void>(); //El void declara que no se va a enviar ningun evento, solo avisa de que va a lanzarse un evento

  //Este metodo LANZA el evento
  disparaElEvento(){
    this.meHanHechoClick.emit(); //Lanza el evento usando el metodo emit
  }

  
}
