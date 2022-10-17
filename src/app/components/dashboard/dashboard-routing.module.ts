import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ListConveniosComponent } from './list-convenios/list-convenios.component';
import { ListestudiantesComponent } from './listestudiantes/listestudiantes.component';
import { PracticasComponent } from './practicas/practicas.component';
import { CrearConvenioComponent } from './crear-convenio/crear-convenio.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    {path: '', component: InicioComponent},
    {path: 'lista convenios', component: ListConveniosComponent },
    {path: 'lista estudiantes', component: ListestudiantesComponent},
    {path: 'practicas', component: PracticasComponent},
    {path: 'crear convenios', component: CrearConvenioComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
