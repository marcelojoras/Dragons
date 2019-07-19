import { TestBed, async, inject } from '@angular/core/testing';

import { DragaoResolverGuard } from './dragao-resolver.guard';

describe('DragaoResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragaoResolverGuard]
    });
  });

  it('should ...', inject([DragaoResolverGuard], (guard: DragaoResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
