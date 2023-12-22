import { TestBed } from '@angular/core/testing';

import { GestionarArticulosService } from './gestionar-articulos.service';

describe('GestionarArticulosService', () => {
  let service: GestionarArticulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionarArticulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
