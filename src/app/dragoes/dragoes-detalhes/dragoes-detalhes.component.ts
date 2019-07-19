import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DragoesService } from '../dragoes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dragoes-detalhes',
  templateUrl: './dragoes-detalhes.component.html',
  styleUrls: ['./dragoes-detalhes.component.css']
})
export class DragoesDetalhesComponent implements OnInit {

  dragao: any = this.route.snapshot.data['dragao'];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  voltar(){
    this.router.navigate(['/'], {relativeTo: this.route});
  }

}
