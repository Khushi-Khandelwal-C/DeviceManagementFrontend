import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfEdit } from './shelf-edit';

describe('ShelfEdit', () => {
  let component: ShelfEdit;
  let fixture: ComponentFixture<ShelfEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelfEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
