import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-calc-actions',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calc-actions.component.html',
  styleUrl: './calc-actions.component.css'
})
export class CalcActionsComponent {
  @Output() resultadoEvent = new EventEmitter<number>();

  valor1 : number =0
  
  valor2 : number =0

  resultado: number = 0
  operar(operacion: string, valor1: number, valor2: number){
    let resultado: number = 0
    switch(operacion){

      case 'suma': resultado = valor1 + valor2
      break;
      
      case 'resta': resultado = valor1 - valor2
      break;
      
      case 'multiplicacion': resultado = valor1 * valor2
      break;
      
      case 'division': resultado = valor1 / valor2
      break;
      
      case 'potencia': resultado = Math.pow(valor1,valor2)
      break;
      
      case 'raiz':resultado = Math.pow(valor1, 1 / valor2)
      break;
    }
    this.resultado = resultado
    this.resultadoEvent.emit(resultado);
  }
  clear(){
    this.valor1 = 0
    this.valor2 = 0
    this.resultado = 0
  }

}
