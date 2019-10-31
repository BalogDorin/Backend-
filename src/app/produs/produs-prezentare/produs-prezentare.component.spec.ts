import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdusPrezentareComponent } from './produs-prezentare.component';

describe('ProdusPrezentareComponent', () => {
  let component: ProdusPrezentareComponent;
  let fixture: ComponentFixture<ProdusPrezentareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdusPrezentareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdusPrezentareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
