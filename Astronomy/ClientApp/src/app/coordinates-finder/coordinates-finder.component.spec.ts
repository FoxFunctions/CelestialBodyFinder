import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatesFinderComponent } from './coordinates-finder.component';

describe('CoordinatesFinderComponent', () => {
  let component: CoordinatesFinderComponent;
  let fixture: ComponentFixture<CoordinatesFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatesFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatesFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
