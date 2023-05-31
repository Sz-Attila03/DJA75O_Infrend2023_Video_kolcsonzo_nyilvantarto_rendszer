import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeseslistComponent } from './keseslist.component';

describe('KeseslistComponent', () => {
  let component: KeseslistComponent;
  let fixture: ComponentFixture<KeseslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeseslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeseslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
