import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionMovieComponent } from './session-movie.component';

describe('SessionMovieComponent', () => {
  let component: SessionMovieComponent;
  let fixture: ComponentFixture<SessionMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
