import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousDashbordComponent } from './anonymous-dashbord.component';

describe('AnonymousDashbordComponent', () => {
  let component: AnonymousDashbordComponent;
  let fixture: ComponentFixture<AnonymousDashbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonymousDashbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
