import { TestBed } from '@angular/core/testing';

import { PortfolioMockDataService } from './portfolio-mock-data.service';

describe('PortfolioMockDataService', () => {
  let service: PortfolioMockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioMockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
