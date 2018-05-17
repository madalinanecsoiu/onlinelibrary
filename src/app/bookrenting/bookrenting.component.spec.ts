import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookrentingComponent } from './bookrenting.component';

describe('BookrentingComponent', () => {
  let component: BookrentingComponent;
  let fixture: ComponentFixture<BookrentingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookrentingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookrentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
