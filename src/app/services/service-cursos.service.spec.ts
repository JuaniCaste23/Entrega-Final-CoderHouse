import { TestBed } from '@angular/core/testing';

import { ServiceCursosService } from './service-cursos.service';

describe('ServiceCursosService', () => {
  let service: ServiceCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
