import { TestBed } from '@angular/core/testing';

import { ElectronjsService } from './electronjs.service';

describe('ElectronjsService', () => {
  let service: ElectronjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
