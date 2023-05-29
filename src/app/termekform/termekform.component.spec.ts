import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermekformComponent } from './termekform.component';

describe('TermekformComponent', () => {
  let component: TermekformComponent;
  let fixture: ComponentFixture<TermekformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermekformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermekformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
