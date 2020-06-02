import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyusersComponent } from './modifyusers.component';

describe('ModifyusersComponent', () => {
  let component: ModifyusersComponent;
  let fixture: ComponentFixture<ModifyusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
