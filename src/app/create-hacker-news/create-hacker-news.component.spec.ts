import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHackerNewsComponent } from './create-hacker-news.component';

describe('CreateHackerNewsComponent', () => {
  let component: CreateHackerNewsComponent;
  let fixture: ComponentFixture<CreateHackerNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHackerNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHackerNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
