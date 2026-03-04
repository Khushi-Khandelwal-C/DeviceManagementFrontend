import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfList } from './shelf-list';

describe('ShelfList', () => {
  let component: ShelfList;
  let fixture: ComponentFixture<ShelfList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelfList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
