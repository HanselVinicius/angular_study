import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { EditaPensamentoComponent } from './componentes/pensamentos/edita-pensamento/edita-pensamento.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'listarPensamento',
    pathMatch:'full'
  },
  {
    path:'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path:'listarPensamento',
    component:ListarPensamentosComponent
  },
  {
    path:'pensamentos/excluirPensamento/:id',
    component:ExcluirPensamentoComponent
  },
  {
    path:'pensamentos/editarPensamento/:id',
    component:EditaPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
