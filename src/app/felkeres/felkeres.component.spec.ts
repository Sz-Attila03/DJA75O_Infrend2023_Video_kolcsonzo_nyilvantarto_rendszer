import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelkeresComponent } from './felkeres.component';

describe('FelkeresComponent', () => {
  let component: FelkeresComponent;
  let fixture: ComponentFixture<FelkeresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FelkeresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FelkeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
