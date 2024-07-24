import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './page/cliente/cliente.component';
import { ProductoComponent } from './page/Rutas/producto.component';
import { FacturaComponent } from './page/factura/factura.component';
import { MenuComponent } from './components/menu/menu.component';
import { Cod404Component } from './components/cod404/cod404.component';
import { NuevoComponent } from './components/clientes/nuevo/nuevo.component';
import { HomeClienteComponent } from './components/clientes/home-cliente/home-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule aquí
import { HomeProductoComponent } from './components/productos/home-producto/home-producto.component';
import { NuevoProductoComponent } from './components/productos/nuevo-producto/nuevo-producto.component';
import { EditarClienteComponent } from './components/clientes/editar-cliente/editar-cliente.component';
import { EditarProductoComponent } from './components/productos/editar-producto/editar-producto.component';
import { LoginComponent } from './page/login/login.component';
import { PageModule } from './page/page.module';
import { CabfacturaComponent } from './components/facturas/cabfactura/cabfactura.component';
import { ListaFacturasComponent } from './components/facturas/lista-facturas/lista-facturas.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { RegistroDocenteComponent } from './components/registro-docente/registro-docente.component';
import { RegistroCarrerasComponent } from './components/registro-carreras/registro-carreras.component';
import { RegistroUnidadComponent } from './components/registro-unidad/registro-unidad.component'; // Asegúrate de importar tu componente
<<<<<<< HEAD


=======
import { DocUnidadComponent } from './components/doc-unidad/doc-unidad.component';
>>>>>>> 8a0a7c0350d4fdfde857f551ca93ee63495abcf6
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProductoComponent,
    FacturaComponent,
    MenuComponent,
    HomeClienteComponent,
    Cod404Component,
    NuevoComponent,
    HomeProductoComponent,
    NuevoProductoComponent,
    EditarClienteComponent,
    EditarProductoComponent,
    LoginComponent,
    CabfacturaComponent,
    ListaFacturasComponent,
    EvaluacionComponent,
    RegistroDocenteComponent, 
    RegistroCarrerasComponent,
    RegistroUnidadComponent, // Asegúrate de declarar tu componente aquí
 DocUnidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Asegúrate de importar FormsModule aquí
    ReactiveFormsModule,
    
    // PageModule // Descomentarlo si es necesario
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
