import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dragao } from './dragao';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DragoesService {

  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  list(){ //pega todos os dragoes
    return this.http.get<Dragao[]>(this.API)
      .pipe(
        
      );
  }

  loadByID(id){ //pega um dragao pelo id
    return this.http.get<Dragao>(`${this.API}/${id}`)
      .pipe(
        take(1)
      );
  }

  create(dragao){ //cria um dragao
    return this.http.post(this.API, dragao)
      .pipe(
        take(1)
      );
  }

  update(dragao){ //faz uma atualização no dragão
    return this.http.put(`${this.API}/${dragao.id}`, dragao)
      .pipe(
        take(1)
      );
  }

  delete(id){ //deleta um dragao
    return this.http.delete(`${this.API}/${id}`)
      .pipe(
        take(1)
      );
  }
}
