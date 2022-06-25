/* Atividade: Conta Bancária

Nesta atividade, vamos testar os conceitos 
de Orientação a Objetos simulando a criação 
de diversos tipos de contas bancárias e 
operações disponíveis em cada uma.

Crie a classe ContaBancaria, 
que possui os parâmetros agencia, numero, tipo e saldo;

Dentro de ContaBancaria, construa o 
getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos 
sacar e depositar;

Crie uma classe-filha chamada ContaCorrente 
que herda todos esses parâmetros e ainda possua 
o parâmetro cartaoCredito;

Ainda em ContaCorrente, construa o getter 
e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo 
seja 'conta corrente' por padrão;

Crie uma classe-filha chamada ContaPoupanca 
que herda todos os parâmetros de ContaBancaria;

Crie uma classe-filha chamada ContaUniversitaria 
que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria 
apenas seja capaz de sacar valores menores 
que 500 reais. */

class ContaBancaria {

    constructor(agencia, numero, tipo = 'Conta Bancaria'){
        this.agencia = agencia;
        this.numero = numero;
        this._saldo = 0;

        this.tipo = tipo;
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo) throw new Error('Operação negada: Saldo insuficiente');

        this._saldo -= valor
    }

    depositar(valor){
        this._saldo += valor
    }
}


class ContaCorrente extends ContaBancaria {

    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero, 'Conta Corrente');
    
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

}

class ContaPoupanca extends ContaBancaria {

    constructor(agencia, numero){
        super(agencia, numero, 'Conta Poupança');
    
    }
}

class ContaUniversitaria extends ContaBancaria {

    constructor(agencia, numero){
        super(agencia, numero, 'Conta Universitaria');
    
    }

    sacar(valor){
        if(valor > 500) throw new Error('Operação negada, valor deve ser abaixo de R$ 500,00');

        super.sacar();
    }
}