import { TestBed } from '@angular/core/testing';

import { StickerService } from './sticker.service';

describe('StickerService', () => {
  let service: StickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
