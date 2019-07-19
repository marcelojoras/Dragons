import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DragoesService } from '../dragoes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dragoes-form',
  templateUrl: './dragoes-form.component.html',
  styleUrls: ['./dragoes-form.component.css']
})
export class DragoesFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: DragoesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    const dragao = this.route.snapshot.data['dragao'];

    this.form = this.fb.group({
      id: [dragao.id],
      name: [dragao.name, [Validators.required]],
      type: [dragao.type, [Validators.required]]
    });

  }

  onSubmit(){
    this.submitted = true;
    if(this.form.valid){

      if(this.form.value.id){
        var obj = this.form.value;
        obj.histories = [];
        obj.createdAt = new Date().toISOString().toString();

        this.service.update(obj).subscribe(
          success => this.router.navigateByUrl('/dragoes'),
          error => alert('Um erro aconteceu!')
        );

      }else{
        var obj = this.form.value;
        obj.histories = [];
        obj.createdAt = new Date().toISOString().toString();
        obj.id = '';

        this.service.create(obj).subscribe(
          success => this.router.navigateByUrl('/dragoes'),
          error => alert('Um erro aconteceu!')
        );

      }//fecha else
    }//fecha if form valido
  }//fecha onsubmit

  onCancel(){
    this.router.navigate(['/'], {relativeTo: this.route});
  }

}
