import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsttimeinfoComponent } from './firsttimeinfo.component';

describe('FirsttimeinfoComponent', () => {
  let component: FirsttimeinfoComponent;
  let fixture: ComponentFixture<FirsttimeinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirsttimeinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirsttimeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
