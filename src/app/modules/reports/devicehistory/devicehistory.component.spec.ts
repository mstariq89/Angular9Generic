import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicehistoryComponent } from './devicehistory.component';

describe('DevicehistoryComponent', () => {
  let component: DevicehistoryComponent;
  let fixture: ComponentFixture<DevicehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
