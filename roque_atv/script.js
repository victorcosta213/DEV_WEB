class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }

    depositar(valor) {
        this.saldo += valor;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, "Conta Corrente", saldo);
        this.cartaoCredito = cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Poupança", saldo);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Universitária", saldo);
    }

    sacar(valor) {
        if (valor <= 500 && this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }
}

const contas = [];

function inserirConta() {
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    let conta;

    if (tipo === "Conta Corrente") {
        const cartaoCredito = parseFloat(prompt("Informe o limite do cartão de crédito:"));
        conta = new ContaCorrente(agencia, numero, saldo, cartaoCredito);
    } else if (tipo === "Conta Poupança") {
        conta = new ContaPoupanca(agencia, numero, saldo);
    } else if (tipo === "Conta Universitária") {
        conta = new ContaUniversitaria(agencia, numero, saldo);
    }

    contas.push(conta);
    limparCampos();
    atualizarGraficos();
}

function limparCampos() {
    document.getElementById("agencia").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("tipo").value = "Conta Corrente";
    document.getElementById("saldo").value = "";
}

function deletarConta(index) {
    if (index >= 0 && index < contas.length) {
        contas.splice(index, 1);
        atualizarGraficos();
        visualizarContas();
    }
}

function visualizarContas() {
    const listaContas = document.getElementById("listaContas");
    listaContas.innerHTML = "";

    contas.forEach((conta, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Conta ${index + 1}: Agência ${conta.agencia}, Número ${conta.numero}, Tipo ${conta.tipo}, Saldo R$ ${conta.saldo}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Deletar Conta";
        deleteButton.addEventListener("click", () => deletarConta(index));

        listItem.appendChild(deleteButton);
        listaContas.appendChild(listItem);
    });
}

function criarGraficoContasPorTipo() {
    const tipoContas = contas.reduce((acc, conta) => {
        acc[conta.tipo] = (acc[conta.tipo] || 0) + 1;
        return acc;
    }, {});

    const ctx = document.getElementById("contasPorTipoChart").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: Object.keys(tipoContas),
            datasets: [
                {
                    label: "Quantidade de Contas por Tipo",
                    data: Object.values(tipoContas),
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                },
            ],
        },
    });
}

function criarGraficoValorTotal() {
    const valorTotal = contas.reduce((acc, conta) => acc + conta.saldo, 0);

    const ctx = document.getElementById("valorTotalChart").getContext("2d");

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Valor Total Depositado", "Saldo Restante"],
            datasets: [
                {
                    data: [valorTotal, 0],
                    backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
                    borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
                    borderWidth: 1,
                },
            ],
        },
    });
}

function criarGraficoQuantidadeDeposito() {
    const quantidadeDeposito = contas.length;

    const ctx = document.getElementById("quantidadeDepositoChart").getContext("2d");

    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Quantidade de Depósitos", "Total de Contas"],
            datasets: [
                {
                    data: [quantidadeDeposito, contas.length],
                    backgroundColor: ["rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
                    borderColor: ["rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
                    borderWidth: 1,
                },
            ],
        },
    });
}

function atualizarGraficos() {
    criarGraficoContasPorTipo();
    criarGraficoValorTotal();
    criarGraficoQuantidadeDeposito();
}



