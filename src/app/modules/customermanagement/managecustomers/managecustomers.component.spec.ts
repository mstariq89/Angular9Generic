import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecustomersComponent } from './managecustomers.component';

describe('ManagecustomersComponent', () => {
  let component: ManagecustomersComponent;
  let fixture: ComponentFixture<ManagecustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagecustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
