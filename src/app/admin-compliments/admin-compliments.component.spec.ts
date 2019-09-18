import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComplimentsComponent } from './admin-compliments.component';

describe('AdminComplimentsComponent', () => {
  let component: AdminComplimentsComponent;
  let fixture: ComponentFixture<AdminComplimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComplimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComplimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
