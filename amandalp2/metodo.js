class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log(`${this.nome} faz um som.`);
    }
}

const gato = new Animal('Miau');
gato.fazerSom(); 
