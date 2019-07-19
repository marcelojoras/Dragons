import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragoesFormComponent } from './dragoes-form.component';

describe('DragoesFormComponent', () => {
  let component: DragoesFormComponent;
  let fixture: ComponentFixture<DragoesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragoesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
