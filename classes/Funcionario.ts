import { randomUUID } from "crypto";

export default class Funcionario {
  readonly id: string;
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

  getId(): string {
    return this.id;
  }

  getNome(): string {
    return this.nome;
  }

  getCargo(): string {
    return this.cargo;
  }

  getHorasTrabalhadas(): number {
    return this.horasTrabalhadas;
  }

  registrarHoras(horasTrabalhadas: number): void {
    this.horasTrabalhadas = horasTrabalhadas;
  }

  calcularSalarioBruto(): number {
    if (!this.horasTrabalhadas) {
      return 0;
    }
    return this.taxaHoraria * this.horasTrabalhadas;
  }

  toString(): string {
    return `Nome: ${this.getNome()} | Cargo: ${this.getCargo()} | ID: ${this.getId()} | Horas Trabalhadas: ${this.getHorasTrabalhadas()} | Salário Bruto: ${this.calcularSalarioBruto()}`;
  }
}
