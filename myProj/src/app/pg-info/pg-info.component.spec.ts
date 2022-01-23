import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgInfoComponent } from './pg-info.component';

describe('PgInfoComponent', () => {
  let component: PgInfoComponent;
  let fixture: ComponentFixture<PgInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
