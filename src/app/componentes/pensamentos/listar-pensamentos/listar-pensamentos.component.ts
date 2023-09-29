import { Pensamento } from '../pensamento';
import { PensamentoService } from './../../pesamentos/pensamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {
    listaPensamentos:Pensamento[] = [

    ];

    constructor(private service: PensamentoService){}

  ngOnInit(): void {
     this.service.listar().subscribe((listaPensamentos) =>{
          this.listaPensamentos = listaPensamentos;
     });
  }




}
