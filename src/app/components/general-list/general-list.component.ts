import { Component, OnInit } from '@angular/core';
import { UsuCarreraService } from '../usu-carrera/usu-carrera.service';
import { UsuUnidadService } from '../usu-unidad/usu-unidad.service';

import { UsuCarrera } from '../usu-carrera/usu-carrera';

import { UsuUnidad } from '../usu-unidad/usu-unidad';

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html',
  styleUrls: ['./general-list.component.css']
})
export class GeneralListComponent implements OnInit {
  usuCarreras: UsuCarrera[] = [];
  usuUnidades: UsuUnidad[] = [];

  constructor(
    private usuCarreraService: UsuCarreraService,
    private usuUnidadService: UsuUnidadService
  ) {}

  ngOnInit(): void {
    this.cargarUsuCarreras();
    this.cargarUsuUnidades();
  }

  cargarUsuCarreras(): void {
    this.usuCarreraService.getUsuCarrera().subscribe(
      (usuCarreras) => {
        this.usuCarreras = usuCarreras;
      },
      (error) => {
        console.error('Error al cargar UsuCarreras', error);
      }
    );
  }

  cargarUsuUnidades(): void {
    this.usuUnidadService.getUsuUnidad().subscribe(
      (usuUnidades) => {
        this.usuUnidades = usuUnidades;
      },
      (error) => {
        console.error('Error al cargar UsuUnidades', error);
      }
    );
  }
}
