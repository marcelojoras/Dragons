import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Dragao } from '../dragao';
import { DragoesService } from '../dragoes.service';

@Injectable({
  providedIn: 'root'
})
export class DragaoResolverGuard implements Resolve<Dragao>  {

  constructor(private service: DragoesService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Dragao> {

    if(route.params && route.params['id']){
      return this.service.loadByID(route.params['id']);
    }

    return of({
      id: null,
      name: null,
      type: null,
      histories: null,
      createdAt: null
    });

  }//fecha resolve
}//fecha classe
