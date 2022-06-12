import { TestBed } from '@angular/core/testing';

import { CreateEditService } from './create-edit.service';

describe('CreateEditService', () => {
  let service: CreateEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
