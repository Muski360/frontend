// estruturação do controller => é o intermediário, realiza a interação entre o model e o view

export class TarefaController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.addTarefaBtn.addEventListener("click", () =>
      this.metodoAddTarefa(),
    );
    this.atualizarTela();
  }

  //criar os métodos

  metodoAddTarefa() {
    const titulo = this.view.getTarefaInputValue(); //pega o valor do input e atribui à uma variavel title

    //verificar se titulo não é vazio
    if (titulo === "") {
      this.view.showMensagem("Digite uma tarefa...");
      return; //se o titulo estiver vazio interrompe o método
    }

    //se o titulo não estiver vazio pula o if e continua o código
    this.view.clearMensagem();
    this.model.addTarefa(titulo);
    this.view.clearInput();
    this.atualizarTela();
  }

  modificarTarefa(id) {
    this.model.atualizarTarefa(id);
    this.atualizarTela();
  }

  removeTarefa(id) {
    this.model.removeTarefa(id);
    this.atualizarTela();
  }

  atualizarTela() {
    //renderização da tela
    this.view.renderTarefa(
      this.model.getTarefas(),
      (id) => this.modificarTarefa(id),
      (id) => this.removeTarefa(id),
    );
  }
}
