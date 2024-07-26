import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//*import { ProductoComponent } from './Rutas/producto.component';
//import { FacturaComponent } from './factura/factura.component';
//import { NuevoComponent } from '../components/clientes/nuevo/nuevo.component';
//import { NuevoProductoComponent } from '../components/productos/nuevo-producto/nuevo-producto.component';
import { Cod404Component } from '../components/cod404/cod404.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeClienteComponent } from '../components/clientes/home-cliente/home-cliente.component';
//import { ListaFacturasComponent } from '../components/facturas/lista-facturas/lista-facturas.component';
import { EvaluacionComponent } from '../components/evaluacion/evaluacion.component'; 
import { DocUnidadComponent } from '../components/doc-unidad/doc-unidad.component';
import { RegistroCarrerasComponent } from '../components/registro-carreras/registro-carreras.component';
import { RegistroUnidadComponent } from '../components/registro-unidad/registro-unidad.component';
import { UsuarioComponent } from '../components/usuarios/usuarios.component';
import { EstadisticasComponent } from '../components/estadisticas/estadisticas.component';
import { GeneralListComponent } from '../components/general-list/general-list.component';


const routes: Routes = [

  {
    path: 'estadisticas',
    component: EstadisticasComponent
  },

    {
      path: 'cliente',
      component: ClienteComponent
    },
    {
      path: 'cliente/nuevo',
      component: HomeClienteComponent
    },
   

    { path: 'evaluacion', component:
       EvaluacionComponent },

    { path: 'unidad', component: 
      DocUnidadComponent },
      { path: 'listado', component: GeneralListComponent },


      { path: 'registro-carreras', component:
         RegistroCarrerasComponent },


      { path: 'usuarios', component:
        UsuarioComponent },
         { path: 'registro-unidad', component:
          RegistroUnidadComponent },
         
   

    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
