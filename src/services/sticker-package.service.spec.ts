import { TestBed } from '@angular/core/testing';

import { StickerPackageService } from './sticker-package.service';

describe('StickerPackageService', () => {
  let service: StickerPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickerPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
