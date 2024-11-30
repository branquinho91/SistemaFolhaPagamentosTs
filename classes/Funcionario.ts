import { randomUUID } from "crypto";

export default class Funcionario {
  private id: string;
  private nome: string;
  private cargo: string;
  private taxaHoraria: number;
  private horasTrabalhadas: number;

  constructor(nome: string, cargo: string, taxaHoraria: number) {
    this.id = randomUUID().substring(0, 8);
    this.nome = nome;
    this.cargo = cargo;
    this.taxaHoraria = taxaHoraria;
    this.horasTrabalhadas = 0;
  }

  registrarHoras(horasTrabalhadas: number): void {
    this.horasTrabalhadas = horasTrabalhadas;
  }

  calcularSalarioMensal(): number {
    if (!this.horasTrabalhadas) {
      return 0;
    }
    return this.taxaHoraria * this.horasTrabalhadas;
  }
}
