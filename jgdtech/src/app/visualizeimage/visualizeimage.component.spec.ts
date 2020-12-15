import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeimageComponent } from './visualizeimage.component';

describe('VisualizeimageComponent', () => {
  let component: VisualizeimageComponent;
  let fixture: ComponentFixture<VisualizeimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizeimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
