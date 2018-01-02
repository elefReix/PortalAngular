import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickesComponent } from './tickes.component';

describe('TickesComponent', () => {
  let component: TickesComponent;
  let fixture: ComponentFixture<TickesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
