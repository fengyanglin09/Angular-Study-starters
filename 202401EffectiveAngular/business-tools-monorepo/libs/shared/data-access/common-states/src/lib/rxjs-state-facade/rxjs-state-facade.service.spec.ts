import { TestBed } from '@angular/core/testing';

import { RxjsStateFacadeService } from './rxjs-state-facade.service';

describe('RxjsStateFacadeService', () => {
  let service: RxjsStateFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsStateFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
