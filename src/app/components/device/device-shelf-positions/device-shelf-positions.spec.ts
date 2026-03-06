import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceShelfPositions } from './device-shelf-positions';

describe('DeviceShelfPositions', () => {
  let component: DeviceShelfPositions;
  let fixture: ComponentFixture<DeviceShelfPositions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceShelfPositions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceShelfPositions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
