import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgAdminComponent } from './pg-admin.component';

describe('PgAdminComponent', () => {
  let component: PgAdminComponent;
  let fixture: ComponentFixture<PgAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
