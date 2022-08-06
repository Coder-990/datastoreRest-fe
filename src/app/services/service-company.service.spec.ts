import { TestBed } from '@angular/core/testing';

import { ServiceCompanyService } from './service-company.service';

describe('ServiceCompanyService', () => {
  let service: ServiceCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
