import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Cadastrar Paciente',
    component: () => import('../components/cadastrar-paciente/CadastrarPaciente.vue'),
  },
  {
    path: '/lista-paciente',
    name: 'Lista de Pacientes',
    component: () => import('../components/lista-paciente/ListaPaciente.vue'),
  },
  {
    path: '/editar-paciente/:id',
    name: 'Editar Paciente',
    component: () => import('../components/editar-paciente/EditarPaciente.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
