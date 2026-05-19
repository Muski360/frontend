// Corrigido: QuitandaModel não possui export default, então o import precisa usar chaves.
import { QuitandaModel } from "../model/QuitandaModel.js";
import QuitandaView from "../view/QuitandaView.js";

export default class QuitandaController {
  constructor() {
    this.model = new QuitandaModel();
    this.view = new QuitandaView();

    this.init();
  }

  init() {
    this.view.bindAddProduto(this.handleAddProduto.bind(this));
    this.view.bindVenda(this.handleVenda.bind(this));
    // Corrigido: o formulário de atualizar existia, mas não estava conectado ao Controller.
    this.view.bindAtualizarProduto(this.handleAtualizarProduto.bind(this));
    this.atualizarTela();
  }

  handleAddProduto(dados) {
    try {
      this.model.addProduto(dados);
      this.view.limparFormularioProduto();
      this.atualizarTela();
    } catch (e) {
      alert(e.message);
    }
  }

  handleVenda(nome, quantidade) {
    try {
      this.model.venderProduto(nome, quantidade);
      this.view.limparFormularioVenda();
      this.atualizarTela();
    } catch (e) {
      alert(e.message);
    }
  }

  atualizarTela() {
    this.view.renderEstoque(this.model.listarProdutos());
    this.view.renderPorcentagens(this.model.listarPorcentagens());
    this.view.renderMovimentacoes(this.model.listarMovimentacoes());
  }

  // Novo handler para atualizar produtos existentes
  handleAtualizarProduto(nome, dados) {
    try {
      this.model.atualizarProduto(nome, dados);
      this.view.limparFormularioAtualizar();
      this.atualizarTela();
      alert("Produto atualizado com sucesso!");
    } catch (e) {
      alert(e.message);
    }
  }
}
