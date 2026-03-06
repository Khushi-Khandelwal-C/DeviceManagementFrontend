import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachShelf } from './attach-shelf';

describe('AttachShelf', () => {
  let component: AttachShelf;
  let fixture: ComponentFixture<AttachShelf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttachShelf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttachShelf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
