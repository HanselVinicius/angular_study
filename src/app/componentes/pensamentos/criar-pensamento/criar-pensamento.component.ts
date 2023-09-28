import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit{

  pensamento = {
    id: '1',
    conteudo: "Angular",
    autoria:"dev",
    modelo: 'modelo2'
  }

  public constructor(){}

  public ngOnInit():void{

  }


  public criarPensamento(){
    alert(`Criou o pensamento`);
  }

  public cancelaCriacao(){
    alert("Cancelado");
  }

}
