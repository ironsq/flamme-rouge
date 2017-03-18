import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsClassificationComponent } from './points-classification.component';

describe('PointsClassificationComponent', () => {
  let component: PointsClassificationComponent;
  let fixture: ComponentFixture<PointsClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
