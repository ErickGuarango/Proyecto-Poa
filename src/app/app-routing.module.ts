import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cod404Component } from './components/cod404/cod404.component';
import { LoginComponent } from './page/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { AuthGuard } from './guards/guard.guard';
import { loginGuard } from './guards/login.guard';
//import { RegistroDocenteComponent } from './components/registro-docente/registro-docente.component';
import { FormComponent } from './components/usuarios/form.component';
import { UsuarioComponent } from './components/usuarios/usuarios.component';
import { ClienteComponent } from './page/cliente/cliente.component';



const routes: Routes = [
    //{path: 'registro-docente', 
     // : RegistroDocenteComponent },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a 'home' al iniciar la aplicación

  {path: 'usuarios/form', component: FormComponent },
  {path: 'usuarios', component: UsuarioComponent },
  {
    path: '',
    component: MenuComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'app',
    component: MenuComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [loginGuard],
  },
  {
    path: '**',
    component: Cod404Component
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
