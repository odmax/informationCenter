import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonComplaintComponent } from './anon-complaint.component';

describe('AnonComplaintComponent', () => {
  let component: AnonComplaintComponent;
  let fixture: ComponentFixture<AnonComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
