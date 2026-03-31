# 🎟️ Projeto: Página de Credenciamento de Eventos

### 1. 📌 Contexto (O Problema)

Você foi contratado para desenvolver o protótipo de uma página de credenciamento de eventos.

A empresa precisa de uma interface rápida onde o recepcionista possa:

* 📝 Cadastrar convidados
* ✅ Validar os dados em tempo real
* 📋 Visualizar uma lista dinâmica dos presentes

Além disso, como o evento ocorrerá à noite, o sistema precisa de um:

* 🌙 **Modo Escuro** para não cansar a vista

---

## 2. 🎯 Desafio (Objetivo)

Você deve construir uma página que contenha:

* 📄 Um formulário de cadastro com **5 campos obrigatórios**
* 📊 Uma área lateral ou inferior com a **Lista de Confirmados**
* ⚙️ Funcionalidades de validação e manipulação dinâmica do DOM

---

## 3. 🛠️ Requisitos Técnicos (O que deve ser feito)

### 🧱 Estrutura

* Criar o HTML com o formulário e seus respectivos **IDs**
* Criar um botão para:

  * 🌙 Alternar **Modo Escuro**

### 🎨 Estilização

* Criar a classe `.dark-mode` no CSS para:

  * 🌑 Alterar cores de fundo
  * ✍️ Alterar cores de texto

### ⚡ Funcionalidade (JavaScript)

* Ao clicar em **Enviar**:

  * 🚫 Impedir envio padrão (`preventDefault`)
  * 🔍 Validar se os 5 campos estão preenchidos

* ❌ Se houver erro:

  * Exibir mensagem em **vermelho**

* ✅ Se estiver tudo correto:

  * Criar dinamicamente um **Card de Convidado**
  * Inserir dentro de uma `<ul>` ou `<div>`

### 🪪 Card do Convidado

Cada card deve conter:

* 👤 Nome do convidado
* 🆔 (ex: documento, email ou identificação)
* 🗑️ Botão **Remover**

### 🔄 Interações

* O botão **Remover** deve:

  * ❌ Excluir apenas o convidado selecionado

* Após cadastro:

  * 🧹 Limpar todos os campos do formulário

* 🎹 Evento de teclado:

  * Pressionar **ESC** → limpa o formulário automaticamente

---

## 4. ✅ Critérios de Avaliação (Checklist de Sucesso)

* ⛔ O formulário impede envio com campos vazios?
* 🔄 O convidado aparece sem recarregar a página?
* 🗑️ O botão "Remover" funciona individualmente?
* 🌙 O modo escuro altera toda a página?
* 🎧 O código utiliza corretamente `addEventListener`?

---