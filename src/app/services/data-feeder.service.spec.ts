import { TestBed } from '@angular/core/testing';

import { DataFeederService } from './data-feeder.service';

describe('DataFeederService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFeederService = TestBed.get(DataFeederService);
    expect(service).toBeTruthy();
  });
});
