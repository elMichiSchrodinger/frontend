import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-vacante',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './vacante.component.html',
  styleUrl: './vacante.component.css'
})
export class VacanteComponent {
  contador:number = 0;
  nextPage(){
    if (this.contador <= 1){
      this.contador++;
    }
  }
  backPage(){
    if (this.contador > 0){
      this.contador--;
    }
  }
}
