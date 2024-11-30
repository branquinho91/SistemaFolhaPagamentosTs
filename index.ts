// /* SISTEMA DE FOLHA DE PAGAMENTOS versão TypeScript */
// /* Sistema para adicionar e listar informações de funcionários */
// /* Trabalho Semana 3 - Módulo 2 DEVinHouse Clamed V3 */
// /* digitar no console 'npm run dev' para iniciar a aplicação */

// const prompt = require("prompt-sync")();

// const funcionarios = [];

// const adicionarFuncionario = (id, nome, cargo, taxaHoraria) => {
//   const funcionario = { id, nome, cargo, taxaHoraria };
//   funcionarios.push(funcionario);
// };

// adicionarFuncionario(1, "João", "Analista", 10.0);
// adicionarFuncionario(2, "Maria", "Gerente", 20.0);
// adicionarFuncionario(3, "Pedro", "Gerente", 30.0);
// adicionarFuncionario(4, "José", "CEO", 350.0);

// const adicionarFuncionarioPrompt = () => {
//   console.log();
//   console.log("Adicionando novo funcionario:");

//   const id = funcionarios.length + 1;
//   const nome = prompt("Nome do funcionário: ").trim();
//   const cargo = prompt("Cargo do funcionário: ").trim();
//   const taxaHoraria = Number(prompt("Valor da hora do funcionário: ").trim());

//   adicionarFuncionario(id, nome, cargo, taxaHoraria);

//   console.log("Funcionario adicionado com sucesso!");
//   console.log(funcionarios.at(-1));

//   gerenciarFolhaPagamento();
// };

// const registrarHoras = (id, horasTrabalhadas) => {
//   const funcionario = funcionarios.find((funcionario) => funcionario.id === id);
//   funcionario.horasTrabalhadas = horasTrabalhadas;
// };

// registrarHoras(1, 160);
// registrarHoras(2, 160);
// registrarHoras(3, 160);
// registrarHoras(4, 160);

// const registrarHorasPrompt = () => {
//   console.log();
//   console.log("Registrando horas do funcionário:");

//   const id = Number(prompt("Número de identificação do funcionário: ").trim());
//   const horasTrabalhadas = Number(prompt("Quantidade de horas trabalhadas: ").trim());

//   registrarHoras(id, horasTrabalhadas);

//   console.log("Horas registradas com sucesso!");
//   console.log(funcionarios[id - 1]);

//   gerenciarFolhaPagamento();
// };

// const calcularSalarioMensal = (id) => {
//   const funcionario = funcionarios.find((funcionario) => funcionario.id === id);
//   const salario = funcionario.taxaHoraria * funcionario.horasTrabalhadas;
//   return salario;
// };

// const calcularInss = (salario) => {
//   let inss = 0;

//   if (salario <= 1412) {
//     inss = salario * 0.075;
//   } else if (salario <= 2666.68) {
//     inss = salario * 0.09;
//   } else if (salario <= 4000.03) {
//     inss = salario * 0.12;
//   } else {
//     inss = salario * 0.14;
//   }

//   if (inss > 908.85) {
//     inss = 908.85;
//   }

//   return inss;
// };

// const gerarRelatorioPagamento = (funcionarios) => {
//   console.log();
//   console.log("Exibindo o relatório de pagamento:");

//   funcionarios.forEach((funcionario) => {
//     const salario = calcularSalarioMensal(funcionario.id);
//     const inss = calcularInss(salario);
//     const salarioLiquido = salario - inss;

//     console.log();
//     console.log(`Número de identificação: ${funcionario.id}`);
//     console.log(`Nome: ${funcionario.nome}`);
//     console.log(`Cargo: ${funcionario.cargo}`);
//     console.log(`Total de Horas: ${funcionario.horasTrabalhadas}`);
//     console.log(`Valor do INSS: R$ ${inss.toFixed(2)}`);
//     console.log(`Salário Bruto: R$ ${salario.toFixed(2)}`);
//     console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
//   });

//   gerenciarFolhaPagamento();
// };

// const gerenciarFolhaPagamento = () => {
//   console.log();
//   console.log("Selecione uma das opções abaixo:");
//   console.log("1 - Adicionar funcionário");
//   console.log("2 - Registrar horas trabalhadas");
//   console.log("3 - Exibir relatório de pagamento");
//   console.log("4 - Sair");

//   const choice = prompt("Escolha uma opção (apenas o número): ").trim();

//   switch (choice) {
//     case "1":
//       adicionarFuncionarioPrompt();
//       break;
//     case "2":
//       registrarHorasPrompt();
//       break;
//     case "3":
//       gerarRelatorioPagamento(funcionarios);
//       break;
//     case "4":
//       console.log();
//       console.log("Encerrando o programa...");
//       process.exit(0);
//     default:
//       console.log();
//       console.log("Opção inválida. Tente novamente.");
//       gerenciarFolhaPagamento();
//   }
// };

// console.log("Bem vindo ao aplicativo SISTEMA DE FOLHA DE PAGAMENTO");
// gerenciarFolhaPagamento();

// /* SISTEMA DE FOLHA DE PAGAMENTOS versão TypeScript */

import Funcionario from "./classes/Funcionario";

const gustavo = new Funcionario("Gustavo", "Analista", 10.0);
gustavo.registrarHoras(160);
console.log(gustavo);
