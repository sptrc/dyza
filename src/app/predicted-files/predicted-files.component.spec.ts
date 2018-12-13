import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictedFilesComponent } from './predicted-files.component';

describe('PredictedFilesComponent', () => {
  let component: PredictedFilesComponent;
  let fixture: ComponentFixture<PredictedFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictedFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
