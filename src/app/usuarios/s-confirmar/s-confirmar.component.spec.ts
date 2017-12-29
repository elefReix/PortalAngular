import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SConfirmarComponent } from './s-confirmar.component';

describe('SConfirmarComponent', () => {
  let component: SConfirmarComponent;
  let fixture: ComponentFixture<SConfirmarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SConfirmarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
