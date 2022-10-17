import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearConvenioComponent } from './crear-convenio.component';

describe('CrearConvenioComponent', () => {
  let component: CrearConvenioComponent;
  let fixture: ComponentFixture<CrearConvenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearConvenioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
