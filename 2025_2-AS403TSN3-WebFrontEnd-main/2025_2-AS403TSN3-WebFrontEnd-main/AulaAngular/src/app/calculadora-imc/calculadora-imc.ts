import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-imc',
  standalone: false,
  templateUrl: './calculadora-imc.html',
  styleUrl: './calculadora-imc.css'
})
export class CalculadoraIMC {

    peso : number = 0
    altura : number = 0
    imc : number = 0
    classificacao : string = ''

    calcularIMC(){
      if(this.peso > 0){
        this.imc = this.peso / (this.altura * this.altura);

         if (this.imc < 18.5) {
        this.classificacao = 'Abaixo do peso';
      } else if (this.imc < 25) {
        this.classificacao = 'Peso normal';
      } else if (this.imc < 30) {
        this.classificacao = 'Sobrepeso';
      } else if (this.imc < 35) {
        this.classificacao = 'Obesidade grau I';
      } else if (this.imc < 40) {
        this.classificacao = 'Obesidade grau II';
      } else {
        this.classificacao = 'Obesidade grau III';
      }
      }
    }
}
