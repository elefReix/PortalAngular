import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleInvitacionComponent } from './detalle-invitacion.component';

describe('DetalleInvitacionComponent', () => {
  let component: DetalleInvitacionComponent;
  let fixture: ComponentFixture<DetalleInvitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleInvitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleInvitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
