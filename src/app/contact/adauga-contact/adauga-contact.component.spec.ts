import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaContactComponent } from './adauga-contact.component';

describe('AdaugaContactComponent', () => {
  let component: AdaugaContactComponent;
  let fixture: ComponentFixture<AdaugaContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaugaContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
