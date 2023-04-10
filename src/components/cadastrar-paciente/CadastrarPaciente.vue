<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Cadastrar Paciente</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">

          <!--Início Bloco: Nome Completo do Paciente-->
          <div class="form-group">
            <label class="font-weight-bold" for="paciente-nome">Nome Completo</label>
            <input type="text"
              class="form-control"
              placeholder="Digite seu nome completo"
              v-model="paciente.nome" required
              >
          </div>
          <!--Fim Bloco: Nome Completo do Paciente-->

          <!--Início Bloco: Nome Completo da Mãe-->
          <div class="form-group">
            <label class="font-weight-bold" for="nome-mae">Nome Completo da Mãe</label>
            <input type="text"
            class="form-control"
            placeholder="Digite o nome completo da sua mãe"
            v-model="paciente.nome_mae" required
            >
          </div>
          <!--Fim Bloco: Nome Completo da Mãe-->

          <!--Início Bloco: Data de Nascimento-->
          <div class="form-group">
            <label class="font-weight-bold" for="data-nascimento">Data de Nascimento</label>
            <input type="date"
            class="form-control"
            placeholder="DD/MM/ANO"
            v-model="paciente.data_nascimento" required
            >
          </div>
          <!--Fim Bloco: Data de Nascimento-->

          <!--Início Bloco: CPF-->
          <div class="form-group">
            <label class="font-weight-bold" for="cpf">CPF</label>
            <input type="number"
            class="form-control"
            placeholder="Digite seu CPF"
            v-model="paciente.cpf" required
            >
          </div>
          <!--Fim Bloco: CPF-->

          <!--Início Bloco: CNS-->
          <div class="form-group">
            <label class="font-weight-bold" for="cns">CNS</label>
            <input type="number"
            class="form-control"
            placeholder="Digite seu CNS"
            v-model="paciente.cns" required
            >
          </div>
          <!--Fim Bloco: CNS-->

          <!--Início Bloco: CEP-->
          <div class="form-group">
            <label class="font-weight-bold" for="cep">CEP</label>
            <input type="number"
            class="form-control"
            placeholder="Digite seu CEP"
            v-model="paciente.cep" required
            >
          </div>
          <!--Fim Bloco: CEP-->
          <div class="form-group">
            <button class="btn btn-primary" type="submit">Cadastrar Paciente</button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    name: 'CadastrarPaciente',
  },
  data() {
    return {
      paciente: {
        nome: '',
        nome_mae: '',
        data_nascimento: '',
        cpf: '',
        cns: '',
        cep: '',
      },
    };
  },
  methods: {
    handleSubmitForm() {},
  },
};
</script>
