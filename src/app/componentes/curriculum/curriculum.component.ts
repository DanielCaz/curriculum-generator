import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../servicios/curriculum.service';
import { Curriculum } from '../../Curriculum';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent implements OnInit {
  curriculum: Curriculum = {
    nombre: '',
    apellido: '',
    email: '',
    habilidades: [],
  };

  constructor(curriculumService: CurriculumService) {
    this.curriculum = curriculumService.getCurriculum;
  }

  ngOnInit(): void {}
}
