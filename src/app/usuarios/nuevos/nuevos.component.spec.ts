import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosComponent } from './nuevos.component';

describe('NuevosComponent', () => {
  let component: NuevosComponent;
  let fixture: ComponentFixture<NuevosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
