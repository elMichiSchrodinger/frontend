import { Routes } from '@angular/router';
import {VacanteComponent} from './vacante/vacante.component';
import {LoginComponent} from './login/login.component';
import {PostulacionComponent} from './postulacion/postulacion.component';

export const routes: Routes = [
  {path:'vacante', component: VacanteComponent},
  {path:'login', component: LoginComponent},
  {path:'postulacion', component: PostulacionComponent}
];
