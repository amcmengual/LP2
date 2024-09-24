class Cachorro extends Animal {
    fazerSom() {
        console.log(`${this.nome} late.`);
    }
}

const meuCachorro = new Cachorro('Rex');
meuCachorro.fazerSom(); 
