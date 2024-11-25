import { Routes } from '@angular/router';
import {VacanteComponent} from './vacante/vacante.component';
import {LoginComponent} from './login/login.component';
import {PostulacionComponent} from './postulacion/postulacion.component';
import {DetallePostulacionComponent} from './postulacion/detalle-postulacion/detalle-postulacion.component';
import {MenuComponent} from './menu/menu.component';
import {NotificacionComponent} from './notificacion/notificacion.component';
import {
  NotificacionPersonalizadaComponent
} from './notificacion/notificacion-personalizada/notificacion-personalizada.component';

export const routes: Routes = [
  {path:'vacante', component: VacanteComponent},
  {path:'', component: LoginComponent},
  {path:'postulacion', component: PostulacionComponent},
  {path:'detallePostulacion', component: DetallePostulacionComponent},
  {path:'menu',component: MenuComponent},
  {path:'notificacion',component: NotificacionComponent},
  {path:'personalizar',component:NotificacionPersonalizadaComponent}
];
