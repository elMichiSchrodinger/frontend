import { Component } from '@angular/core';
import {Postulaciones} from '../models/postulaciones.model';

@Component({
  selector: 'app-postulacion',
  standalone: true,
  imports: [],
  templateUrl: './postulacion.component.html',
  styleUrl: './postulacion.component.css'
})
export class PostulacionComponent {
  postulaciones: Postulaciones[]=[]
}
