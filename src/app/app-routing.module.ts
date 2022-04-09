import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'curriculum', component: CurriculumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
