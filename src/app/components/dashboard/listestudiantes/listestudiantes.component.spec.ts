import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListestudiantesComponent } from './listestudiantes.component';

describe('ListestudiantesComponent', () => {
  let component: ListestudiantesComponent;
  let fixture: ComponentFixture<ListestudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListestudiantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListestudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
