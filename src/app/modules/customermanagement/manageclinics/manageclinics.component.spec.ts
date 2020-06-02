import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageclinicsComponent } from './manageclinics.component';

describe('ManageclinicsComponent', () => {
  let component: ManageclinicsComponent;
  let fixture: ComponentFixture<ManageclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
