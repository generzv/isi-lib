import { TestBed } from '@angular/core/testing';

import { IsiLibService } from './isi-lib.service';

describe('IsiLibService', () => {
  let service: IsiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
