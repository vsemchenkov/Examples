import { TestBed } from '@angular/core/testing';

import { ItemModelService } from './item-model.service';

describe('ItemModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemModelService = TestBed.get(ItemModelService);
    expect(service).toBeTruthy();
  });
});
