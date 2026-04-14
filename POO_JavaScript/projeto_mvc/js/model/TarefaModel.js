// base da estrutura do aplicativo
// é a classe responsável pelos dados 

// sera utilizada em outras partes do código
//classe exportavel
export class TarefaModel {
  //construtor da classe de tarefas
  constructor() {
    this.tarefas = [];
    this.currentId = 1;
  }

  addTarefa(titulo) {
    const newTarefa = {
      id: this.currentId++,
      titulo: titulo,
      completed: false,
    }; //coleção
    this.tarefas.push(newTarefa); //adicionando a tarefa ao vetor
  }

  getTarefas() {
    return this.tarefas;
  } //busca tdas as tarefas do vetor

  atualizarTarefa(id) {
    const tarefa = this.tarefas.find((tarefa) => tarefa.id === id);
    if (tarefa) {
      //se tarefa for encontrada
      tarefa.completed = !tarefa.completed; //inverte o valor da booleana
    }
  }

  removeTarefa(id) {
    this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id);
    // reescrever a tarefa
  }
}

// o que foi feito:
 // criamos a lista de tarefas
 // gera um id automatico para a tarefa
 // adiciona tarefas
 // busca as tarefas do vetor
 // altera a tarefa
 // remove a tarefa

 
