import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarContraComponent } from './components/recuperar-contra/recuperar-contra.component';
import { ResgistrarComponent } from './components/resgistrar/resgistrar.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "registrar", component: ResgistrarComponent},
  {path: "recuperar_contra", component: RecuperarContraComponent},
  {path: "verificar_correo", component: VerificarCorreoComponent},
  {path: "dashboard", loadChildren: () => import("./components/dashboard/dashboard.module").then(x => x.DashboardModule)},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
