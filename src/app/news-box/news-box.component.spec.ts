import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBoxComponent } from './news-box.component';

describe('NewsBoxComponent', () => {
  let component: NewsBoxComponent;
  let fixture: ComponentFixture<NewsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
