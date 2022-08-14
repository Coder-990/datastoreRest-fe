import { TestBed } from '@angular/core/testing';

import { ServiceArticle } from './service-article.service';

describe('ServiceArticleService', () => {
  let service: ServiceArticle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceArticle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
