import { TestBed } from '@angular/core/testing';

import { DragoesService } from './dragoes.service';

describe('DragoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragoesService = TestBed.get(DragoesService);
    expect(service).toBeTruthy();
  });
});
