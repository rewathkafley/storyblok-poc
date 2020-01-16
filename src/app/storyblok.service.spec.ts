import { TestBed } from '@angular/core/testing';

import { StoryblokService } from './storyblok.service';

describe('StoryblokService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoryblokService = TestBed.get(StoryblokService);
    expect(service).toBeTruthy();
  });
});
