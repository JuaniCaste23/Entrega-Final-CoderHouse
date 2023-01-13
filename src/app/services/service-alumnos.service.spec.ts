import { TestBed } from '@angular/core/testing';

import { ServiceAlumnosService } from './service-alumnos.service';

describe('ServiceAlumnosService', () => {
  let service: ServiceAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
