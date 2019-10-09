import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecSuggestionComponent } from './rec-suggestion.component';

describe('RecSuggestionComponent', () => {
  let component: RecSuggestionComponent;
  let fixture: ComponentFixture<RecSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
