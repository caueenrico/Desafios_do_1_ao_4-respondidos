//Respostas feitas por Caue Enrico

//utilizando o enum e type

enum profissao { //criando um padrão 
    Atriz,
    Padeiro,
}

type Persona = { // criando um tipo
    nome: string,
    idade: number,
    profissao?: profissao //adicionado um '?' definindo uma NÃO obrigatoriedade
}

let pessoa1: Persona = {
    nome: 'Maria',
    idade: 29,
    profissao: profissao.Atriz
};

let pessoa2: Persona = {
    nome: "Roberto",
    idade: 19,
    profissao: profissao.Padeiro
}

let pessoa03:Persona = {
    nome: "Laura",
    idade: 32,
    profissao: profissao.Atriz
};

let pessoa04 = {
    nome: "Carlos",
    idade: 19,
    profissao: profissao.Padeiro
}