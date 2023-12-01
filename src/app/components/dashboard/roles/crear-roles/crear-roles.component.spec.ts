import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRolesComponent } from './crear-roles.component';

describe('CrearRolesComponent', () => {
  let component: CrearRolesComponent;
  let fixture: ComponentFixture<CrearRolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearRolesComponent]
    });
    fixture = TestBed.createComponent(CrearRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
