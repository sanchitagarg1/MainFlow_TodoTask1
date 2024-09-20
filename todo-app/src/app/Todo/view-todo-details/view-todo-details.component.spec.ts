import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodoDetailsComponent } from './view-todo-details.component';

describe('ViewTodoDetailsComponent', () => {
  let component: ViewTodoDetailsComponent;
  let fixture: ComponentFixture<ViewTodoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTodoDetailsComponent]
    });
    fixture = TestBed.createComponent(ViewTodoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
