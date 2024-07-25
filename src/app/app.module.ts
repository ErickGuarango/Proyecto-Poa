import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { ProductoComponent } from './page/Rutas/producto.component';

import { MenuComponent } from './components/menu/menu.component';
import { Cod404Component } from './components/cod404/cod404.component';
//import { NuevoComponent } from './components/clientes/nuevo/nuevo.component';
import { HomeClienteComponent } from './components/clientes/home-cliente/home-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule aquí
//import { EditarClienteComponent } from './components/clientes/editar-cliente/editar-cliente.component';
import { LoginComponent } from './page/login/login.component';
import { PageModule } from './page/page.module';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
//import { RegistroDocenteComponent } from './components/registro-docente/registro-docente.component';
import { RegistroCarrerasComponent } from './components/registro-carreras/registro-carreras.component';
import { RegistroUnidadComponent } from './components/registro-unidad/registro-unidad.component'; // Asegúrate de importar tu componente
import { UsuarioService } from './components/usuarios/usuario.service';
import { UsuarioComponent } from './components/usuarios/usuarios.component'; // Asegúrate de importar tu componente
import { RolesService } from './components/roles/roles.service';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/usuarios/form.component';
import { DocUnidadComponent } from './components/doc-unidad/doc-unidad.component';
import { ClienteComponent } from './page/cliente/cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    HomeClienteComponent,
  
    //ProductoComponent,
    
    MenuComponent,
   
    Cod404Component,
   // NuevoComponent,
   
    LoginComponent,
    
    EvaluacionComponent,
   // RegistroDocenteComponent, 
    RegistroCarrerasComponent,
    RegistroUnidadComponent, // Asegúrate de declarar tu componente aquí
 DocUnidadComponent,
 UsuarioComponent,
 FormComponent,

  // Asegúrate de declarar tu componente aquí

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Asegúrate de importar FormsModule aquí
    ReactiveFormsModule,
    
    // PageModule // Descomentarlo si es necesario
  ],
  providers: [UsuarioService,RolesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
