import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureinfoComponent } from './lectureinfo.component';

describe('LectureinfoComponent', () => {
  let component: LectureinfoComponent;
  let fixture: ComponentFixture<LectureinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
