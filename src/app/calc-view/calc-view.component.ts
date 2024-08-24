import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {
  @Input() resultado!:number
}
