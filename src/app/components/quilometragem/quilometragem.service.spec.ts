import { TestBed } from '@angular/core/testing';

import { QuilometragemService } from './quilometragem.service';

describe('QuilometragemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuilometragemService = TestBed.get(QuilometragemService);
    expect(service).toBeTruthy();
  });
});
