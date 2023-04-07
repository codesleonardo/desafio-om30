<template>
  <div>
    <!--Início Navbar-->
    <nav class="navbar navbar-expand-sm bg-danger navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand order-md-last">Pacientes OM30</a>
        <ul class="navbar-nav nav-underline mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Cadastrar Paciente</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lista-paciente">Lista de Pacientes</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!--Fim Navbar-->
    <div class="container mt-5">
      <router-view />
    </div>
  </div>
</template>
