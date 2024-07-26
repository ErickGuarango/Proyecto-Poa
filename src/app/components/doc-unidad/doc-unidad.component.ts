import { Component, OnInit } from '@angular/core';
import { ProyectoService } from './proyecto.service';
import { Proyecto } from './proyecto';
import { ObjetivosOperativosUnidad } from './objetivos-operativos-unidad';
import { ObjetivosOperativosUnidadService } from './objetivos-operativos-unidad.service';
import { ActividadesUnidadService } from './actividades-unidad.service';
import { ActividadesUnidad } from './actividades-unidad';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doc-unidad',
  templateUrl: './doc-unidad.component.html',
  styleUrls: ['./doc-unidad.component.css']
})
export class DocUnidadComponent implements OnInit {
  public proyecto: Proyecto = new Proyecto();
  public unidad: string = '';
  public periodo: string = '';
  private activityCounter: number = 1;
  public sections: any[] = [];
  public actividades: ActividadesUnidad[] = [];

  constructor(
    private proyectoService: ProyectoService,
    private objetivoOperativoService: ObjetivosOperativosUnidadService,
    private actividadesUnidadService: ActividadesUnidadService
  ) {}

  ngOnInit(): void {
    this.clearTable();

    const nuevoButton = document.getElementById('nuevoButton');
    if (nuevoButton) {
      nuevoButton.addEventListener('click', () => this.addNewSection());
    }

    const addRowButton = document.getElementById('addRowButton');
    if (addRowButton) {
      addRowButton.addEventListener('click', () => this.addRow());
    }
  }

  clearTable(): void {
    this.sections = [];
    this.activityCounter = 1;
  }

  addNewSection(): void {
    const newSection = {
      estrategia: this.proyecto.estrategia,
      objetivoOperativo: '',
      rows: [{ counter: this.activityCounter }]
    };
    this.sections.push(newSection);
    this.activityCounter++;
  }

  addRow(): void {
    if (this.sections.length > 0) {
      const currentSection = this.sections[this.sections.length - 1];
      currentSection.rows.push({ counter: this.activityCounter });
      this.activityCounter++;
    } else {
      alert('Debe haber al menos una sección antes de agregar filas.');
    }
  }

  removeRow(sectionIndex: number, rowIndex: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.sections[sectionIndex].rows.splice(rowIndex, 1);
        this.reorderRows(sectionIndex);
        Swal.fire(
          'Eliminado!',
          'La actividad ha sido eliminada.',
          'success'
        );
      }
    });
  }

  removeSection(sectionIndex: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.sections.splice(sectionIndex, 1);
        Swal.fire(
          'Eliminado!',
          'La sección ha sido eliminada.',
          'success'
        );
      }
    });
  }

  private reorderRows(sectionIndex: number): void {
    this.sections[sectionIndex].rows.forEach((row: any, index: number) => {
      row.counter = index + 1;
    });
  }

  saveObjetivoOperativo(): void {
    this.proyectoService.createProyecto(this.proyecto).subscribe(
      proyectoResponse => {
        console.log('Proyecto creado:', proyectoResponse);
        this.sections.forEach(section => {
          const objetivoOperativo = new ObjetivosOperativosUnidad();
          objetivoOperativo.proyecto = proyectoResponse;
          objetivoOperativo.descripcion = section.objetivoOperativo;
          this.objetivoOperativoService.createObjetivoOperativo(objetivoOperativo).subscribe(
            objetivoOperativoResponse => {
              console.log('Objetivo Operativo creado:', objetivoOperativoResponse);
              this.saveActividades(section, objetivoOperativoResponse);
            },
            error => {
              console.error('Error al crear el objetivo operativo:', error);
            }
          );
        });
        Swal.fire(
          'Guardado!',
          'El objetivo operativo ha sido guardado con éxito.',
          'success'
        ).then(() => {
          this.clearTable(); // Llamada para limpiar la tabla después de guardar
        });
      },
      error => {
        console.error('Error al crear el proyecto:', error);
        Swal.fire(
          'Error!',
          'Hubo un problema al guardar el objetivo operativo.',
          'error'
        );
      }
    );
  }

  private saveActividades(section: any, objetivoOperativo: ObjetivosOperativosUnidad): void {
    for (let row of section.rows) {
      const actividad = new ActividadesUnidad();
      actividad.descripcion = (document.querySelector(`#actividadDescripcion${row.counter}`) as HTMLInputElement).value;
      actividad.responsable = (document.querySelector(`#actividadResponsable${row.counter}`) as HTMLInputElement).value;
      actividad.plazo = new Date((document.querySelector(`#actividadPlazo${row.counter}`) as HTMLInputElement).value);
      actividad.meta = parseInt((document.querySelector(`#actividadMeta${row.counter}`) as HTMLInputElement).value, 10);
      actividad.recFinIsta = parseFloat((document.querySelector(`#actividadRecFinIsta${row.counter}`) as HTMLInputElement).value);
      actividad.recFinAutogestion = parseFloat((document.querySelector(`#actividadRecFinAutogestion${row.counter}`) as HTMLInputElement).value);
      actividad.objetivoOperativo = objetivoOperativo;

      this.actividadesUnidadService.createActividad(actividad).subscribe(
        actividadResponse => {
          console.log('Actividad creada:', actividadResponse);
        },
        error => {
          console.error('Error al crear la actividad:', error);
        }
      );
    }
  }
}
