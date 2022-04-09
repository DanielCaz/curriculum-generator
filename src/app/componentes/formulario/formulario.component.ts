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
  curriculum: Curriculum = {
    nombre: '',
    apellido: '',
    email: '',
    habilidades: [],
  };

  nuevaHabilidad = {
    nombre: '',
    porcentaje: 0,
  };

  constructor(
    private curriculumService: CurriculumService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.noEstaEnBlanco(this.curriculum.nombre) &&
      this.noEstaEnBlanco(this.curriculum.apellido) &&
      this.noEstaEnBlanco(this.curriculum.email) &&
      this.curriculum.habilidades.length > 0
    ) {
      this.curriculumService.setCurriculum(this.curriculum);
      this.router.navigateByUrl('/curriculum');
    } else {
      alert('Información insuficiente');
    }
  }

  agregarHabilidad() {
    if (
      this.noEstaEnBlanco(this.nuevaHabilidad.nombre) &&
      this.nuevaHabilidad.porcentaje >= 0 &&
      this.nuevaHabilidad.porcentaje <= 100
    ) {
      this.curriculum.habilidades.push(this.nuevaHabilidad);
      this.nuevaHabilidad = { nombre: '', porcentaje: 0 };
    }
  }

  removerHabilidad() {
    if (this.curriculum.habilidades.length > 0) {
      this.curriculum.habilidades.pop();
    }
  }

  private noEstaEnBlanco(texto: string): boolean {
    return texto.split(' ').join('').length > 0;
  }
}
