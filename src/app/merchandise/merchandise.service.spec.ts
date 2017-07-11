import { TestBed, inject } from '@angular/core/testing';

import { Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { MerchandiseService } from './merchandise.service';

describe('MerchandiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MerchandiseService, {provide: Http, deps: [MockBackend]}]
    });
  });

  it('should be created', inject([MerchandiseService], (service: MerchandiseService) => {
    expect(service).toBeTruthy();
  }));
});
