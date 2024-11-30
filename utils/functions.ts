import Funcionario from "../classes/Funcionario";

const prompt = require("prompt-sync")();

const adicionarFuncionarioPrompt = (): Funcionario => {
  console.log();
  console.log("Adicionando novo funcionario:");

  const nome = prompt("Nome do funcionário: ").trim();
  const cargo = prompt("Cargo do funcionário: ").trim();
  const taxaHoraria = Number(prompt("Valor da hora do funcionário: ").trim());

  const funcionario = new Funcionario(nome, cargo, taxaHoraria);

  console.log();
  console.log("Funcionario adicionado com sucesso!");
  console.log(funcionario.toString());

  return funcionario;
};

const registrarHorasPrompt = (funcionarios: Funcionario[]): void => {
  console.log();

  if (funcionarios.length === 0) {
    console.log("Nenhum funcionário cadastrado.");
    return;
  }

  const id = prompt("Número de identificação do funcionário que deseja registrar horas trabalhadas: ").trim();
  const funcionario = funcionarios.find((funcionario) => funcionario.getId() === id);
  if (!funcionario) {
    console.log("Funcionário não encontrado.");
    return;
  }
  const horasTrabalhadas = Number(prompt("Quantidade de horas trabalhadas: ").trim());
  funcionario.registrarHoras(horasTrabalhadas);
  console.log("Horas registradas com sucesso!");
  console.log(funcionario.toString());
};

const calcularInss = (funcionario: Funcionario): number => {
  const salario = funcionario.calcularSalarioBruto();
  let inss = 0;

  if (salario <= 1412) {
    inss = salario * 0.075;
  } else if (salario <= 2666.68) {
    inss = salario * 0.09;
  } else if (salario <= 4000.03) {
    inss = salario * 0.12;
  } else {
    inss = salario * 0.14;
  }

  if (inss > 908.85) {
    inss = 908.85;
  }

  return inss;
};

const calcularSalarioLiquido = (funcionario: Funcionario): number => {
  const salarioBruto = funcionario.calcularSalarioBruto();
  const inss = calcularInss(funcionario);
  return salarioBruto - inss;
};

const gerarRelatorioPagamento = (funcionarios: Funcionario[]): void => {
  console.log();

  if (funcionarios.length === 0) {
    console.log("Nenhum funcionário cadastrado.");
    return;
  }

  console.log("Exibindo o relatório de pagamento:");

  funcionarios.forEach((funcionario) => {
    const salarioBruto = funcionario.calcularSalarioBruto();
    const inss = calcularInss(funcionario);
    const salarioLiquido = calcularSalarioLiquido(funcionario);

    console.log();
    console.log(`Número de identificação: ${funcionario.getId()}`);
    console.log(`Nome: ${funcionario.getNome()}`);
    console.log(`Cargo: ${funcionario.getCargo()}`);
    console.log(`Total de Horas: ${funcionario.getHorasTrabalhadas()}`);
    console.log(`Valor do INSS: R$ ${inss.toFixed(2)}`);
    console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
    console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
  });
};

const gerenciarFolhaPagamento = () => {
  const funcionarios: Funcionario[] = [];

  console.log("Bem vindo ao aplicativo SISTEMA DE FOLHA DE PAGAMENTO");

  while (true) {
    console.log();
    console.log("Selecione uma das opções abaixo:");
    console.log("1 - Adicionar funcionário");
    console.log("2 - Registrar horas trabalhadas");
    console.log("3 - Exibir relatório de pagamento");
    console.log("4 - Sair");

    const choice = prompt("Escolha uma opção (apenas o número): ").trim();

    switch (choice) {
      case "1":
        const funcionario = adicionarFuncionarioPrompt();
        funcionarios.push(funcionario);
        break;
      case "2":
        registrarHorasPrompt(funcionarios);
        break;
      case "3":
        gerarRelatorioPagamento(funcionarios);
        break;
      case "4":
        console.log();
        console.log("Encerrando o programa...");
        process.exit(0);
      default:
        console.log();
        console.log("Opção inválida. Tente novamente.");
        gerenciarFolhaPagamento();
    }
  }
};

export default gerenciarFolhaPagamento;
