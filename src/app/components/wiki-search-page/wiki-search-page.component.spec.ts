import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSearchPageComponent } from './wiki-search-page.component';

describe('WikiSearchPageComponent', () => {
  let component: WikiSearchPageComponent;
  let fixture: ComponentFixture<WikiSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
