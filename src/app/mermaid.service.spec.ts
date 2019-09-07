import {TestBed} from '@angular/core/testing';

import {MermaidService} from './mermaid.service';

describe('MermaidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MermaidService = TestBed.get(MermaidService);
    expect(service).toBeTruthy();
  });
});
