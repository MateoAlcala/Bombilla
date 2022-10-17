import { TestBed } from '@angular/core/testing';

import { SconveniosService } from './sconvenios.service';

describe('SconveniosService', () => {
  let service: SconveniosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SconveniosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
