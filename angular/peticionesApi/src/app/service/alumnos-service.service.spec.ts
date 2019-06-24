import { TestBed } from '@angular/core/testing';

import { AlumnosServiceService } from './alumnos-service.service';

describe('AlumnosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumnosServiceService = TestBed.get(AlumnosServiceService);
    expect(service).toBeTruthy();
  });
});
