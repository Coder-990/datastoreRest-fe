import { TestBed } from '@angular/core/testing';

import { ServiceArticleService } from './service-article.service';

describe('ServiceArticleService', () => {
  let service: ServiceArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
