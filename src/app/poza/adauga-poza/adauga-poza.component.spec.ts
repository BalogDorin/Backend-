import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaPozaComponent } from './adauga-poza.component';

describe('AdaugaPozaComponent', () => {
  let component: AdaugaPozaComponent;
  let fixture: ComponentFixture<AdaugaPozaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaugaPozaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugaPozaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
