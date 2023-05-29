import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KazetakComponent } from './kazetak.component';

describe('KazetakComponent', () => {
  let component: KazetakComponent;
  let fixture: ComponentFixture<KazetakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KazetakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KazetakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
