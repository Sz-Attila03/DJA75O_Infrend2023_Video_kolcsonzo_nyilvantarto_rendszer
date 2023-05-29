import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzerkeztComponent } from './szerkezt.component';

describe('SzerkeztComponent', () => {
  let component: SzerkeztComponent;
  let fixture: ComponentFixture<SzerkeztComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzerkeztComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzerkeztComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
