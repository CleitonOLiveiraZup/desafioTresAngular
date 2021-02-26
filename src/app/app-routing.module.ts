import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuSerieComponent } from './components/menu-serie/menu-serie.component';
import { MenuInicioComponent } from './components/menu-inicio/menu-inicio.component';
import { MenuFilmesComponent } from './components/menu-filmes/menu-filmes.component';
import { MenuInfantilComponent } from './components/menu-infantil/menu-infantil.component';
import { AuthGuard } from './components/guards/auth.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent, canLoad: [AuthGuard]},
  {path: 'menu-inicio', component: MenuInicioComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  {path: 'menu-serie', component: MenuSerieComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  {path: 'menu-filmes', component: MenuFilmesComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  {path: 'menu-infantil', component: MenuInfantilComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  {path: '', component: MenuInicioComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
