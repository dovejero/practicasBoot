import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAlumnosComponent } from './api-alumnos.component';

describe('ApiAlumnosComponent', () => {
  let component: ApiAlumnosComponent;
  let fixture: ComponentFixture<ApiAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
