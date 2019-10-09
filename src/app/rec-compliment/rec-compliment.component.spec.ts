import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecComplimentComponent } from './rec-compliment.component';

describe('RecComplimentComponent', () => {
  let component: RecComplimentComponent;
  let fixture: ComponentFixture<RecComplimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecComplimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecComplimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
