import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaProdusComponent } from './adauga-produs.component';

describe('AdaugaProdusComponent', () => {
  let component: AdaugaProdusComponent;
  let fixture: ComponentFixture<AdaugaProdusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaugaProdusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugaProdusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
