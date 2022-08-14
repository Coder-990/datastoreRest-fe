import { TestBed } from '@angular/core/testing';

import { ServiceCompany } from './service-company.service';

describe('ServiceCompanyService', () => {
  let service: ServiceCompany;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCompany);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
