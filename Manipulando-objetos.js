function Cliente(nome, cpf, email, saldo)
{
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }

}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup)
{
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup

}

const ju = new ClientePoupanca("Ju","123456789", 'ju@email.com', 100, 300)

console.log(ju)

ClientePoupanca.prototype.depositarPoup = function(valor)
{
    this.saldoPoup += valor
}


ju.depositarPoup(50)

console.log(ju.saldoPoup)