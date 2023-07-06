import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHomePageComponent } from './content-home-page.component';

describe('ContentHomePageComponent', () => {
  let component: ContentHomePageComponent;
  let fixture: ComponentFixture<ContentHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
