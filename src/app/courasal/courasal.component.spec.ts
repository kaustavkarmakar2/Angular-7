import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourasalComponent } from './courasal.component';

describe('CourasalComponent', () => {
  let component: CourasalComponent;
  let fixture: ComponentFixture<CourasalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourasalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourasalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
