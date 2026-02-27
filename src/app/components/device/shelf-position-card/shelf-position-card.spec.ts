import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfPositionCard } from './shelf-position-card';

describe('ShelfPositionCard', () => {
  let component: ShelfPositionCard;
  let fixture: ComponentFixture<ShelfPositionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelfPositionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfPositionCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
