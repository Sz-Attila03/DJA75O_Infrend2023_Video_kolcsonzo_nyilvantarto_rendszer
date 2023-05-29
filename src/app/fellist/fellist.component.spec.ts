import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FellistComponent } from './fellist.component';

describe('FellistComponent', () => {
  let component: FellistComponent;
  let fixture: ComponentFixture<FellistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FellistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
