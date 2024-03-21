import { TestBed } from '@angular/core/testing';

import { ListaDianomisServiceService } from './lista-dianomis.service';

describe('ListaDianomisServiceService', () => {
  let service: ListaDianomisServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDianomisServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
