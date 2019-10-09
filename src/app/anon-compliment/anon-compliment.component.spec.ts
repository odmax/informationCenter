import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonComplimentComponent } from './anon-compliment.component';

describe('AnonComplimentComponent', () => {
  let component: AnonComplimentComponent;
  let fixture: ComponentFixture<AnonComplimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonComplimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonComplimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
