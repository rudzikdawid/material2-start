import { TestBed, inject } from '@angular/core/testing';

import { PersonalizedService } from './personalized.service';

describe('PersonalizedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalizedService]
    });
  });

  it('should ...', inject([PersonalizedService], (service: PersonalizedService) => {
    expect(service).toBeTruthy();
  }));
});
