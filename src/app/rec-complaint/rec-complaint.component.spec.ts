import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecComplaintComponent } from './rec-complaint.component';

describe('RecComplaintComponent', () => {
  let component: RecComplaintComponent;
  let fixture: ComponentFixture<RecComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
