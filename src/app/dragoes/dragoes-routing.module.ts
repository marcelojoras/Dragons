import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragoesListaComponent } from './dragoes-lista/dragoes-lista.component';
import { DragoesFormComponent } from './dragoes-form/dragoes-form.component';
import { DragoesDetalhesComponent } from './dragoes-detalhes/dragoes-detalhes.component';
import { DragaoResolverGuard } from './guards/dragao-resolver.guard';

const routes: Routes = [
  {path: '', component: DragoesListaComponent},
  {path: 'novo', component: DragoesFormComponent, resolve: {
    dragao: DragaoResolverGuard
  }},
  {path: 'editar/:id', component: DragoesFormComponent, resolve: {
    dragao: DragaoResolverGuard
  }},
  {path: 'detalhes/:id', component: DragoesDetalhesComponent, resolve: {
    dragao: DragaoResolverGuard
  }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragoesRoutingModule { }
