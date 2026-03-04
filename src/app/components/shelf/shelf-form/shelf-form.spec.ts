import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfForm } from './shelf-form';

describe('ShelfForm', () => {
  let component: ShelfForm;
  let fixture: ComponentFixture<ShelfForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelfForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
