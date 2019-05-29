import { TestBed } from '@angular/core/testing';

import { WikiSearchService } from './wiki-search.service';

describe('WikiSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WikiSearchService = TestBed.get(WikiSearchService);
    expect(service).toBeTruthy();
  });
});
