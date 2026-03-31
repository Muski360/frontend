//Estudos de POO em JavaScript
//Diferença entre Procedural e POO

//declaração de uma variavel em PRocedural

let produto1 = {
    nome: "Impressora",
    preco: 1000,
    marca: "HP",
    disponivel: true,
    desconto: function(){
        return this.preco * 0.1; // desconto de 10% quando solicitado
    }
}//coleção

let produto2 = {
    nome: "WebCam",
    preco: 550,
    marca: "MultiLaser",
    disponivel: false,
    desconto: function(){
        return this.preco * 0.2;
    }
}

// imprimindo informações do produto

console.log(
  `Produto: ${produto1.nome}\n
  Preço: ${produto1.preco}\n
  Marca: ${produto1.marca}\n
  Disponível: ${produto1.disponivel ? "Sim" : "Não"}\n
  Desconto: ${produto1.disponivel ? produto1.desconto() : `Sem desconto`}`,
);

class Produto {
    // atributos
    nome;
    preco;
    marca;
    disponivel;

    //métodos
    //construtor
    constructor(nome, preco, marca, disponibilidade){
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.disponivel = disponibilidade;

    }
    // Método para aplicar desconto
    desconto(){
        return this.preco * 0.1
    }
}