class animal {
    constructor(nome, cor){
        this.nome = nome;
        this.cor = cor;
    }

falar(){
    return `Olá, meu nome é ${this.nome}.`;
}    
}

class cachorro extends animal{
    constructor(nome, cor, raca){
        super(nome, cor);
        this.raca = raca; 
    }

latir(){
    return `au au!`
}
}

class gato extends animal{
    constructor(nome, cor, raca){
        super(nome, cor);
        this.raca = raca;
    }

miar(){
    return `miau!`
}
}

const animais = [
    new cachorro ("Rex", "Marrom", "Pastor Alemão"),
    new gato ("Mia", "Preto", "Siamês"),
];

for (const animal of animais){
    console.log(`o animal "${animal.nome} é ${animal.cor}`);
}

for (const animal of animais){
    console.log(animal.falar());
}

const cachorro = animais[0]; 
console.log(cachorro.latir());

const gato = animais[1];
console.log(gato.miar());