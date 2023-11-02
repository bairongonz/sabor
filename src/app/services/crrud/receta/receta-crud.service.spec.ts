import { TestBed } from '@angular/core/testing';

import { RecetaCrudService } from './receta-crud.service';

describe('RecetaCrudService', () => {
  let service: RecetaCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetaCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
