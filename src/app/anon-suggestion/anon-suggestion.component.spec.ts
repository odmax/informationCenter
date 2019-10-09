import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonSuggestionComponent } from './anon-suggestion.component';

describe('AnonSuggestionComponent', () => {
  let component: AnonSuggestionComponent;
  let fixture: ComponentFixture<AnonSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
