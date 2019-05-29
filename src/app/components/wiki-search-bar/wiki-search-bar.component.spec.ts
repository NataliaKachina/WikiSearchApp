import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSearchBarComponent } from './wiki-search-bar.component';

describe('WikiSearchBarComponent', () => {
  let component: WikiSearchBarComponent;
  let fixture: ComponentFixture<WikiSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
