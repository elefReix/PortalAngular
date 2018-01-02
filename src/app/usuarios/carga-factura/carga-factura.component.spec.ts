import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaFacturaComponent } from './carga-factura.component';

describe('CargaFacturaComponent', () => {
  let component: CargaFacturaComponent;
  let fixture: ComponentFixture<CargaFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
