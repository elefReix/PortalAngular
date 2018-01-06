import { TestBed, inject } from '@angular/core/testing';

import { UtileriaService } from './utileria.service';

describe('UtileriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtileriaService]
    });
  });

  it('should be created', inject([UtileriaService], (service: UtileriaService) => {
    expect(service).toBeTruthy();
  }));
});
