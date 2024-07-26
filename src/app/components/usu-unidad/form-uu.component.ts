import { Component, OnInit } from '@angular/core';
import { UsuUnidad } from './usu-unidad';
import { Unidad } from 'src/app/model/unidad';
import { Usuarios } from '../usuarios/usuario';
import { UnidadService } from 'src/app/service/unidad.service';
import { UsuarioService } from '../usuarios/usuario.service';
import { UsuUnidadService } from './usu-unidad.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-uu',
  templateUrl: './form-uu.component.html',
  styleUrls: ['./form-uu.component.css']
})
export class FormUUComponent implements OnInit {
  usuUnidad: UsuUnidad = new UsuUnidad();
  usuario: Usuarios = new Usuarios();
  unidades: Unidad[] = [];
  usuarioId: number | null = null;

  constructor(
    private unidadService: UnidadService,
    private usuarioService: UsuarioService,
    private usuUnidadService: UsuUnidadService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.usuarioId = params['id'];
      if (this.usuarioId) {
        this.obtenerUsuario();
      }
    });
    this.obtenerUnidades();
  }

  obtenerUsuario(): void {
    if (this.usuarioId) {
      this.usuarioService.getUsuario(this.usuarioId).subscribe(usuario => {
        this.usuario = usuario || new Usuarios();
        this.usuUnidad.usuario = this.usuario; // Asocia el usuario al Usuunidad
      });
    }
  }

  obtenerUnidades(): void {
    this.unidadService.getUnidades().subscribe(unidades => {
      this.unidades = unidades;
    });
  }

  public create(): void {
    if (this.usuUnidad.usuario && this.usuUnidad.unidad.id) {
      this.usuUnidadService.create(this.usuUnidad).subscribe(response => {
         this.router.navigate(['/app/cliente']);
          console.log('Usuunidad registrado', response);
        Swal.fire('Registrado', 'Usuunidad creado con éxito', 'success');
      });
    } else {
      Swal.fire('Error', 'Por favor, complete todos los campos', 'error');
    }
  }
}
