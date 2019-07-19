import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragoesListaComponent } from './dragoes-lista.component';

describe('DragoesListaComponent', () => {
  let component: DragoesListaComponent;
  let fixture: ComponentFixture<DragoesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragoesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragoesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
