import { Component, OnInit } from '@angular/core';
import { SenacCoinMovimentacao } from 'src/app/models/SenacCoinMovimentacao';
import { SenacCoinMovimentacaoService } from 'src/app/services/senac-coin-movimentacao.service';

@Component({
  selector: 'app-senac-coin-movimentacao',
  templateUrl: './senac-coin-movimentacao.component.html',
  styleUrls: ['./senac-coin-movimentacao.component.css']
})
export class SenacCoinMovimentacaoComponent implements OnInit {

  senacCoinMovimentacoes : SenacCoinMovimentacao; 
  MovimentacaoId : number;
  MovimentacaoData : string;
  MovimentacaoObservacao : string;
  MovimetacaoValor : number;
  MovimentacaoStatus : number;

  constructor(private senacCoinHistorico : SenacCoinMovimentacaoService) { }

  ngOnInit(): void {
    MovimentacaoId : localStorage.getItem("senacCoinId");
    this.senacCoinHistorico.ObterSenacCoinMovimentacaoPeloId(1).subscribe((resultado:SenacCoinMovimentacao) =>{
      this.senacCoinMovimentacoes = resultado;
    });
  }

}
