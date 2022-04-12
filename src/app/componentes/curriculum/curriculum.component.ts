import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../servicios/curriculum.service';
import { Curriculum } from 'src/app/Curriculum';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent implements OnInit {
  datos: Curriculum;

  constructor(curriculumService: CurriculumService) {
    this.datos = curriculumService.getCurriculum;
  }

  ngOnInit(): void {}
}
