import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {


saludo(){
  alert('Hola Clase');

  } 

  datoPadre =  'Ejemplo de dato que viene del padre, solo se imprimira desde el componente hijo';
 
  recibidoDelHijo(textoHijo: String){
    alert('EL PADRE: ' + textoHijo);
  }
}
