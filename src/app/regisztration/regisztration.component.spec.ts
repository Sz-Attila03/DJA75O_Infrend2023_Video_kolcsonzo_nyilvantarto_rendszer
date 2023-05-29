import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisztrationComponent } from './regisztration.component';

describe('RegisztrationComponent', () => {
  let component: RegisztrationComponent;
  let fixture: ComponentFixture<RegisztrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisztrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisztrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
