class Estudante{
    constructor(nome, email, ra, curso, disciplinas){
        this.nome = nome
        this.email = email
        this.ra = ra
        this.curso = curso
        this.disciplinas = disciplinas
    }
}
const disciplinas = [
    ["SO","GESTÃO","METODOLOGIA"],
    ["PROGRAMAÇÃO WEB","IHC","ESTRUTURA DE DADOS"],
    ["INGLÊS IV","INDEFINIDA","INDEFINIDA"]
]
const estudante1 = new Estudante("Mayara", 
"mayara.santos45@fatec.sp.gov.br", 
"1050482123025", "ADS", disciplinas[0])

 console.log(estudante1)

const estudante2 = new Estudante("Bruno", 
"bruno@fatec.sp.gov.br", 
"1050482526089", "ADS", disciplinas[1])

console.log(estudante2)

