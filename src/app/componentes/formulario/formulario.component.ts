import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curriculum } from '../../Curriculum';
import { CurriculumService } from '../../servicios/curriculum.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nuevo: Curriculum = this.curriculumService.getCurriculum;

  constructor(
    private curriculumService: CurriculumService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    var valido = true;
    this.nuevo.formacionAcademica.forEach((formacion) => {
      if (!formacion.fechaInicio || !formacion.fechaFin) {
        alert('Falta llenar fechas de la formación académica');
        valido = false;
      }
    });
    this.nuevo.experienciaLaboral.forEach((experiencia) => {
      if (!experiencia.fechaInicio || !experiencia.fechaFin) {
        alert('Falta llenar fechas de la experiencia laboral');
        valido = false;
      }
    });
    if (valido) {
      this.curriculumService.setCurriculum(this.nuevo);
      this.router.navigateByUrl('/curriculum');
    }
  }

  //* Agregar
  agregarEmail() {
    this.nuevo.datosPersonales.emails.push({ direccion: '' });
  }

  agregarTelefono() {
    this.nuevo.datosPersonales.telefonos.push({ numero: '' });
  }

  agregarHabilidad() {
    this.nuevo.habilidades.push({ nombre: '', porcentaje: 0 });
  }

  agregarFormacion() {
    this.nuevo.formacionAcademica.push({
      grado: '',
      institucion: '',
      fechaInicio: '',
      fechaFin: '',
    });
  }

  agregarExperiencia() {
    this.nuevo.experienciaLaboral.push({
      puesto: '',
      empresa: '',
      responsabilidades: [{ nombre: '' }],
      fechaInicio: '',
      fechaFin: '',
    });
  }

  agregarResponsabilidad(i: number) {
    this.nuevo.experienciaLaboral[i].responsabilidades.push({ nombre: '' });
  }

  //* Remover
  removerEmail(i: number) {
    this.nuevo.datosPersonales.emails.splice(i, 1);
  }

  removerTelefono(i: number) {
    this.nuevo.datosPersonales.telefonos.splice(i, 1);
  }

  removerHabilidad(i: number) {
    this.nuevo.habilidades.splice(i, 1);
  }

  removerFormacion(i: number) {
    this.nuevo.formacionAcademica.splice(i, 1);
  }

  removerExperiencia(i: number) {
    this.nuevo.experienciaLaboral.splice(i, 1);
  }

  removerResponsabilidad(i: number, j: number) {
    this.nuevo.experienciaLaboral[i].responsabilidades.splice(j, 1);
  }

  //* Datos de prueba
  insertarDatosDePrueba() {
    this.nuevo = {
      datosPersonales: {
        fotoUrl: 'https://i.ibb.co/HxcPDpZ/Profile.jpg',
        nombre: 'Jorge Daniel',
        apellido: 'Cazarez Hernandez',
        emails: [{ direccion: 'cazarez.jorge.prog2019@gmail.com' }],
        telefonos: [{ numero: '3511358429' }],
      },
      formacionAcademica: [
        {
          grado: 'Superior',
          institucion: 'ITESZ',
          fechaInicio: '',
          fechaFin: '',
        },
      ],
      experienciaLaboral: [
        {
          puesto: 'Vendedor',
          empresa: 'Ventas Inc.',
          responsabilidades: [{ nombre: 'Vender' }],
          fechaInicio: '',
          fechaFin: '',
        },
      ],
      habilidades: [{ nombre: 'Diseñar', porcentaje: 3 }],
    };
  }
}
