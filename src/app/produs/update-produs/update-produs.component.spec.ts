import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProdusComponent } from './update-produs.component';

describe('UpdateProdusComponent', () => {
  let component: UpdateProdusComponent;
  let fixture: ComponentFixture<UpdateProdusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProdusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProdusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
