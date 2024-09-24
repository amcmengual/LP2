class Gato extends Animal {
    fazerSom() {
        console.log(`${this.nome} mia.`);
    }
}

const meuGato = new Gato('Felix');
meuGato.fazerSom(); 