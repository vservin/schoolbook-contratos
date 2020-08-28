import { TestBed } from '@angular/core/testing';

import { EscuelasService } from './escuelas.service';

describe('EscuelasService', () => {
  let service: EscuelasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscuelasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
