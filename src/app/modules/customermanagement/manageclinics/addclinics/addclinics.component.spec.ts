import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclinicsComponent } from './addclinics.component';

describe('AddclinicsComponent', () => {
  let component: AddclinicsComponent;
  let fixture: ComponentFixture<AddclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
