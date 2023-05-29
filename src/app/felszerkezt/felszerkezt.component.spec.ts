import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelszerkeztComponent } from './felszerkezt.component';

describe('FelszerkeztComponent', () => {
  let component: FelszerkeztComponent;
  let fixture: ComponentFixture<FelszerkeztComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FelszerkeztComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FelszerkeztComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
