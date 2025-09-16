import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  standalone: false,
  templateUrl: './apolice-seguro.html',
  styleUrl: './apolice-seguro.css'
})
export class ApoliceSeguro {

nome: string = '';
sexo: string = '';
idade: number = 0;
valorAutomovel: number = 0;
valorApolice: number = 0;
resumo: string = '';

calcularApolice() {
  if (this.sexo === 'masculino') {
    this.valorApolice = this.idade <= 25
      ? this.valorAutomovel * 0.15
      : this.valorAutomovel * 0.10;
  } else if (this.sexo === 'feminino') {
    this.valorApolice = this.valorAutomovel * 0.08;
  }

  this.resumo = `Segurado: ${this.nome}<br>Sexo: ${this.sexo}<br>Idade: ${this.idade}<br>Valor do Automóvel: R$ ${this.valorAutomovel.toFixed(2)}<br>Valor da Apólice: R$ ${this.valorApolice.toFixed(2)}`;
}
}