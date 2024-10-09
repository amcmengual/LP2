class Pessoa {
  constructor(nome, telefone, email) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
  }
  falar() {
    console.log(`${this.nome} está falando`);
  }
  andar() {
    console.log(`${this.nome} está andando`);
  }
}

class PessoaFisica extends Pessoa {
  constructor(nome, telefone, email, cpf) {
    super(nome, telefone, email);
    this.cpf = cpf;
  }
}

class PessoaJuridica extends Pessoa {
  constructor(nome, telefone, email, cnpj) {
    super(nome, telefone, email);
    this.cnpj = cnpj;
  }
  pagarSalario() {
    console.log(`${this.nome} pagou os salários`);
  }

  PagarSalarios() {
    super.andar();
    console.log(`${this.nome} pagou os salários`);
  }
}

let pessoa1 = new PessoaFisica("José", "12345", "jose@jose.com", "12345");
pessoa1.andar();
console.log(pessoa1.nome, pessoa1.cpf);

let pessoa2 = new PessoaJuridica(
  "Maria",
  "654312",
  "maria@maria.com",
  "654312"
);
pessoa2.andar();
pessoa2.PagarSalarios();
