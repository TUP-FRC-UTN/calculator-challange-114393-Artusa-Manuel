import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcViewComponent } from './calc-view/calc-view.component';
import { FormsModule } from '@angular/forms';
import { CalcActionsComponent } from './calc-actions/calc-actions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalcViewComponent,FormsModule,CalcActionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';

  valor1: number = 0;
  valor2: number = 0;

  resultado!: number;

  actualizarResult(resultado:number){
    this.resultado = resultado

  }
}
