import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../servicios/curriculum.service';
import { Curriculum } from 'src/app/Curriculum';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent implements OnInit {
  datos: Curriculum = {
    datosPersonales: {
      fotoUrl: 'https://i.ibb.co/HxcPDpZ/Profile.jpg',
      nombre: 'Jorge Daniel',
      apellido: 'Cazarez Hernandez',
      emails: [
        { direccion: 'gatito432100@gmail.com' },
        { direccion: 'cazarez.jorge.prog2019@gmail.com' },
        { direccion: 'jcazarez359@accitesz.com' },
      ],
      telefonos: [{ numero: '3519138683' }, { numero: '3514582284' }],
    },
    formacionAcademica: [
      {
        grado: 'No se xd',
        institucion: 'CBTIS',
        fechaInicio: '07/08/2018',
        fechaFin: '06/06/20',
      },
      {
        grado: 'No se otra vez xd',
        institucion: 'ITES Zamora',
        fechaInicio: '07/08/2020',
        fechaFin: '06/06/23',
      },
    ],
    experienciaLaboral: [
      {
        puesto: 'Chacha',
        empresa: 'Mi casa',
        responsabilidades: [
          { nombre: 'Lavar trastes' },
          { nombre: 'barrer' },
          { nombre: 'trapear' },
        ],
        fechaInicio: '02/11/2000',
        fechaFin: '99/99/9999',
      },
      {
        puesto: 'Cajero',
        empresa: "McDonald's",
        responsabilidades: [
          { nombre: 'Atender' },
          { nombre: 'Limpiar' },
          { nombre: 'No resistirme a ser explotado' },
          { nombre: 'Ser un esclavo' },
        ],
        fechaInicio: '02/04/1998',
        fechaFin: '12/10/1998',
      },
    ],
    habilidades: [
      { nombre: 'Java', porcentaje: 99 },
      { nombre: 'C++', porcentaje: 75 },
      { nombre: 'JavaScript', porcentaje: 100 },
    ],
  };

  constructor(curriculumService: CurriculumService) {
    // this.datos = curriculumService.getCurriculum;
  }

  ngOnInit(): void {}
}
