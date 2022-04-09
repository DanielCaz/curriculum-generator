import { Injectable } from '@angular/core';
import { Curriculum } from 'src/app/Curriculum';

@Injectable({
  providedIn: 'root',
})
export class CurriculumService {
  curriculum: Curriculum = {
    nombre: '',
    apellido: '',
    email: '',
    habilidades: [],
  };

  get getCurriculum(): Curriculum {
    return { ...this.curriculum };
  }

  setCurriculum(curriculum: Curriculum) {
    this.curriculum = curriculum;
  }

  constructor() {}
}
