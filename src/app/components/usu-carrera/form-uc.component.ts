import { Component, OnInit } from '@angular/core';
import { UsuCarrera } from './usu-carrera';

import { Carrera } from 'src/app/model/carrera';

import { Usuarios } from '../usuarios/usuario';
import { CarreraService } from 'src/app/service/carrera.service';

import { UsuarioService } from '../usuarios/usuario.service';
import { UsuCarreraService } from './usu-carrera.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-uc',
  templateUrl: './form-uc.component.html',
  styleUrls: ['./form-uc.component.css']
})
export class FormUcComponent implements OnInit {
  usuCarrera: UsuCarrera = new UsuCarrera();
  usuario: Usuarios = new Usuarios();
  carreras: Carrera[] = [];
  usuarioId: number | null = null;

  constructor(
    private carreraService: CarreraService,
    private usuarioService: UsuarioService,
    private usuCarreraService: UsuCarreraService,
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
    this.obtenerCarreras();
  }

  obtenerUsuario(): void {
    if (this.usuarioId) {
      this.usuarioService.getUsuario(this.usuarioId).subscribe(usuario => {
        this.usuario = usuario || new Usuarios();
        this.usuCarrera.usuario = this.usuario; // Asocia el usuario al UsuCarrera
      });
    }
  }

  obtenerCarreras(): void {
    this.carreraService.getCarreras().subscribe(carreras => {
      this.carreras = carreras;
    });
  }

  public create(): void {
    if (this.usuCarrera.usuario && this.usuCarrera.carrera.id) {
      this.usuCarreraService.create(this.usuCarrera).subscribe(response => {
         this.router.navigate(['/app/cliente']);
          console.log('UsuCarrera registrado', response);
        Swal.fire('Registrado', 'UsuCarrera creado con éxito', 'success');
      });
    } else {
      Swal.fire('Error', 'Por favor, complete todos los campos', 'error');
    }
  }
}
