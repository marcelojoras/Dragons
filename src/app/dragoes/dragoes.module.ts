import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { DragoesRoutingModule } from './dragoes-routing.module';
import { DragoesListaComponent } from './dragoes-lista/dragoes-lista.component';
import { DragoesFormComponent } from './dragoes-form/dragoes-form.component';
import { DragoesDetalhesComponent } from './dragoes-detalhes/dragoes-detalhes.component';


@NgModule({
  declarations: [DragoesListaComponent, DragoesFormComponent, DragoesDetalhesComponent],
  imports: [
    CommonModule,
    DragoesRoutingModule,
    ReactiveFormsModule,
    TooltipModule.forRoot()
  ]
})
export class DragoesModule { }
