import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangtInvoiceComponent } from './mangt-invoice.component';

describe('MangtInvoiceComponent', () => {
  let component: MangtInvoiceComponent;
  let fixture: ComponentFixture<MangtInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangtInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangtInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
