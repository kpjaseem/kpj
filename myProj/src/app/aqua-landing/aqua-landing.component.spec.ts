import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaLandingComponent } from './aqua-landing.component';

describe('AquaLandingComponent', () => {
  let component: AquaLandingComponent;
  let fixture: ComponentFixture<AquaLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquaLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
