import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeworkComponent } from './somework.component';

describe('SomeworkComponent', () => {
  let component: SomeworkComponent;
  let fixture: ComponentFixture<SomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
