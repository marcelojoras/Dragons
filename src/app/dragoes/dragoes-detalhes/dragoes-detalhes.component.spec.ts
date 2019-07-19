import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragoesDetalhesComponent } from './dragoes-detalhes.component';

describe('DragoesDetalhesComponent', () => {
  let component: DragoesDetalhesComponent;
  let fixture: ComponentFixture<DragoesDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragoesDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragoesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
