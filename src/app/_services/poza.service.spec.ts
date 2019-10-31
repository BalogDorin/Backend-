import { TestBed } from '@angular/core/testing';

import { PozaService } from './poza.service';

describe('PozaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PozaService = TestBed.get(PozaService);
    expect(service).toBeTruthy();
  });
});
