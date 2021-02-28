import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUpperTopComponent } from './header-upper-top.component';

describe('HeaderUpperTopComponent', () => {
  let component: HeaderUpperTopComponent;
  let fixture: ComponentFixture<HeaderUpperTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUpperTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUpperTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
