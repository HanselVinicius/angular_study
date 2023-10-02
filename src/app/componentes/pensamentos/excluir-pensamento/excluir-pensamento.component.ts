import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../services/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento:Pensamento={
    id:0,
    conteudo:'',
    autoria:'',
    modelo:''
  };

  constructor(
    private service: PensamentoService,
    private router :Router,
    private routeActivated:ActivatedRoute){}

  ngOnInit(): void {
    const id = this.routeActivated.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((found)=>{
      this.pensamento = found;
    });
  }


  public excluirPensamento(){
    console.log(this.pensamento.id);

    if(this.pensamento.id != null){
      this.service.excluir(this.pensamento.id).subscribe(()=>{
      this.router.navigate(['/listarPensamento']);
    })
  }
}
  public cancelar(){
    this.router.navigate(['/listarPensamento']);
  }


}


