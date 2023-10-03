import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../services/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edita-pensamento',
  templateUrl: './edita-pensamento.component.html',
  styleUrls: ['./edita-pensamento.component.css']
})
export class EditaPensamentoComponent implements OnInit{

  public pensamento:Pensamento = {
    id:0,
    conteudo:'',
    autoria:'',
    modelo:''
  } 

  constructor(
    private  pensamentoService:PensamentoService,
    private router:Router,
    private activadetRoute:ActivatedRoute ){}

  public ngOnInit(): void {
    const id = this.activadetRoute.snapshot.paramMap.get('id');
    this.pensamentoService.buscarPorId(parseInt(id!)).subscribe((pens) =>{
      this.pensamento = pens;
    })
  }

  public editarPensamento(){
    this.pensamentoService.editar(this.pensamento).subscribe(
        ()=>{
         this.router.navigate(['/listarPensamento']); 
        }
    )
  }

  public cancelarEdicao(){
    this.router.navigate(['/listarPensamento']); 
  }


}
