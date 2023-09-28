import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {
    listaPensamentos = [
      {
        conteudo: 'angulas',
        autoria: 'nay',
        modelo: 'modelo3'
      },
      {
        conteudo: 'heniqueeeee',
        autoria: 'nay',
        modelo: 'modelo2'
      },
      {
        conteudo: `heniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeee
        heniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeee
        heniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeee
        heniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeeeheniqueeeee
        `,
        autoria: 'nay',
        modelo: 'modelo2'
      },
    ];

    constructor(){}
}
