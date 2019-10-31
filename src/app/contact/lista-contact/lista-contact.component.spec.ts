import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContactComponent } from './lista-contact.component';

describe('ListaContactComponent', () => {
  let component: ListaContactComponent;
  let fixture: ComponentFixture<ListaContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
