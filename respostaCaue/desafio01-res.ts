//Respostas feitas por Caue Enrico

//definindon antes
let employee: {code:number, name:string } = {
    code: 10,
    name: 'John'
};

//utilizando interfaces com objetos

interface Funcionarios {
    code:number,
    name:string
}

let funcionario001: Funcionarios = {
    code: 11,
    name: 'Ana'
}

//ou

let funcionario002 = {} as Funcionarios

funcionario002.code = 20
funcionario002.name = 'Ana'