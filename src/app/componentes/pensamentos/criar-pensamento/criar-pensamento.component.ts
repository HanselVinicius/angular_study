import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../../pesamentos/pensamento.service';
import { Pensamento } from '../pensamento';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit{

  pensamento:Pensamento = {
    id: 0,
    conteudo: "",
    autoria:"",
    modelo: ''
  }

  public constructor(
    private service:PensamentoService,
    private router: Router
    ){}

  public ngOnInit():void{

  }


  public criarPensamento(){
    this.service.criar(this.pensamento).subscribe();
    this.router.navigate(['/listarPensamento'])
  }

  public cancelaCriacao(){
  }

}
