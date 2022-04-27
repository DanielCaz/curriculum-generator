import { Injectable } from '@angular/core';
import { Curriculum } from 'src/app/Curriculum';

@Injectable({
  providedIn: 'root',
})
export class CurriculumService {
  curriculum: Curriculum = {
    datosPersonales: {
      fotoUrl: '',
      nombre: '',
      apellido: '',
      emails: [{ direccion: '' }],
      telefonos: [{ numero: '' }],
    },
    formacionAcademica: [
      {
        grado: '',
        institucion: '',
        fechaInicio: '',
        fechaFin: '',
      },
    ],
    experienciaLaboral: [
      {
        puesto: '',
        empresa: '',
        responsabilidades: [{ nombre: '' }],
        fechaInicio: '',
        fechaFin: '',
      },
    ],
    habilidades: [{ nombre: '', porcentaje: 0 }],
  };

  get getCurriculum(): Curriculum {
    return { ...this.curriculum };
  }

  setCurriculum(curriculum: Curriculum) {
    this.curriculum = curriculum;
  }

  constructor() {}
}
