import { Component, OnInit, ViewChild } from '@angular/core';
import { DragoesService } from '../dragoes.service';
import { Dragao } from '../dragao';
import { Observable, empty, of, Subject, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dragoes-lista',
  templateUrl: './dragoes-lista.component.html',
  styleUrls: ['./dragoes-lista.component.css'],
  preserveWhitespaces: true
})
export class DragoesListaComponent implements OnInit {

  dragoes$: Observable<Dragao[]>;
  error$ = new Subject<boolean>();

  constructor(private service: DragoesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.buscarDragoes();
  }

  buscarDragoes(){
    this.dragoes$ = this.service.list()
    .pipe(
      catchError(error => {
        this.error$.next(true);
        return empty();
      })
    );
  }

  editarDragao(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  detalhesDragao(id){
    this.router.navigate(['detalhes', id], {relativeTo: this.route});
  }

  removerDragao(dragao){
    this.service.delete(dragao.id).subscribe(
      success => this.buscarDragoes(),
      error => alert('Deu erro!')
    );
  }

}
