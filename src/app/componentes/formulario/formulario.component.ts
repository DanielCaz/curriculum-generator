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
    this.curriculumService.setCurriculum(this.nuevo);
    this.router.navigateByUrl('/curriculum');
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

  //* Eventos
  alEscribirEmail(i: number, email: string) {
    this.nuevo.datosPersonales.emails[i].direccion = email;
  }

  alEscribirTelefono(i: number, telefono: string) {
    this.nuevo.datosPersonales.telefonos[i].numero = telefono;
  }

  alEscribirHabilidadNombre(i: number, nombre: string) {
    this.nuevo.habilidades[i].nombre = nombre;
  }

  alEscribirHabilidadPorcentaje(i: number, porcentaje: number) {
    this.nuevo.habilidades[i].porcentaje = porcentaje;
  }

  alEscribirFormacionGrado(i: number, grado: string) {
    this.nuevo.formacionAcademica[i].grado = grado;
  }

  alEscribirFormacionInstitucion(i: number, institucion: string) {
    this.nuevo.formacionAcademica[i].institucion = institucion;
  }

  alEscribirFormacionFechaInicio(i: number, fecha: string) {
    this.nuevo.formacionAcademica[i].fechaInicio = fecha;
  }

  alEscribirFormacionFechaFin(i: number, fecha: string) {
    this.nuevo.formacionAcademica[i].fechaFin = fecha;
  }

  alEscribirExperienciaPuesto(i: number, puesto: string) {
    this.nuevo.experienciaLaboral[i].puesto = puesto;
  }

  alEscribirExperienciaEmpresa(i: number, empresa: string) {
    this.nuevo.experienciaLaboral[i].empresa = empresa;
  }

  alEscribirExperienciaFechaInicio(i: number, fecha: string) {
    this.nuevo.experienciaLaboral[i].fechaInicio = fecha;
  }

  alEscribirExperienciaFechaFin(i: number, fecha: string) {
    this.nuevo.experienciaLaboral[i].fechaFin = fecha;
  }

  alEscribirExperienciaResponsabilidad(
    i: number,
    j: number,
    responsabilidad: string
  ) {
    this.nuevo.experienciaLaboral[i].responsabilidades[j].nombre =
      responsabilidad;
  }
}
