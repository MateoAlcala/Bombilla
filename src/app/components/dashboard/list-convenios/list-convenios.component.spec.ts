import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConveniosComponent } from './list-convenios.component';

describe('ListConveniosComponent', () => {
  let component: ListConveniosComponent;
  let fixture: ComponentFixture<ListConveniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConveniosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListConveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
