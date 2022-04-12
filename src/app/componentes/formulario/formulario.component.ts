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
  removerEmail() {
    this.nuevo.datosPersonales.emails.pop();
  }

  removerTelefono() {
    this.nuevo.datosPersonales.telefonos.pop();
  }

  removerHabilidad() {
    this.nuevo.habilidades.pop();
  }

  removerFormacion() {
    this.nuevo.formacionAcademica.pop();
  }

  removerExperiencia() {
    this.nuevo.experienciaLaboral.pop();
  }

  removerResponsabilidad(i: number) {
    this.nuevo.experienciaLaboral[i].responsabilidades.pop();
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

  alEscribirFormacionFechaInicio(i: number, fecha: Date) {
    this.nuevo.formacionAcademica[i].fechaInicio = this.preparaFecha(fecha);
  }

  alEscribirFormacionFechaFin(i: number, fecha: Date) {
    this.nuevo.formacionAcademica[i].fechaFin = this.preparaFecha(fecha);
  }

  alEscribirExperienciaPuesto(i: number, puesto: string) {
    this.nuevo.experienciaLaboral[i].puesto = puesto;
  }

  alEscribirExperienciaEmpresa(i: number, empresa: string) {
    this.nuevo.experienciaLaboral[i].empresa = empresa;
  }

  alEscribirExperienciaFechaInicio(i: number, fecha: Date) {
    this.nuevo.experienciaLaboral[i].fechaInicio = this.preparaFecha(fecha);
  }

  alEscribirExperienciaFechaFin(i: number, fecha: Date) {
    this.nuevo.experienciaLaboral[i].fechaFin = this.preparaFecha(fecha);
  }

  alEscribirExperienciaResponsabilidad(
    i: number,
    j: number,
    responsabilidad: string
  ) {
    this.nuevo.experienciaLaboral[i].responsabilidades[j].nombre =
      responsabilidad;
  }

  //* Otras
  preparaFecha(fecha: Date): string {
    const dia = fecha.getDay() < 10 ? `0${fecha.getDay()}` : fecha.getDay();
    const mes =
      fecha.getMonth() < 10 ? `0${fecha.getMonth()}` : fecha.getMonth();

    return `${dia}/${mes}/${fecha.getFullYear()}`;
  }
}
