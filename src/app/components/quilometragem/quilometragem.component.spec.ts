import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuilometragemComponent } from './quilometragem.component';

describe('QuilometragemComponent', () => {
  let component: QuilometragemComponent;
  let fixture: ComponentFixture<QuilometragemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuilometragemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuilometragemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
