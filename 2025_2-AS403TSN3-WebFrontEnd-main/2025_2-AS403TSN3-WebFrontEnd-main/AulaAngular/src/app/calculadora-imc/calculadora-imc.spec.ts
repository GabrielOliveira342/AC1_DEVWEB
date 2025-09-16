import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraIMC } from './calculadora-imc';

describe('CalculadoraIMC', () => {
  let component: CalculadoraIMC;
  let fixture: ComponentFixture<CalculadoraIMC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculadoraIMC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraIMC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
