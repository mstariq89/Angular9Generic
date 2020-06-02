import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyrolesComponent } from './modifyroles.component';

describe('ModifyrolesComponent', () => {
  let component: ModifyrolesComponent;
  let fixture: ComponentFixture<ModifyrolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyrolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
