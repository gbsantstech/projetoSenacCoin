import { Component, OnInit } from '@angular/core';
import { SenacCoin } from 'src/app/models/SenacCoin';
import { SenacCoinService } from 'src/app/services/senac-coin.service';

@Component({
  selector: 'app-senac-coin',
  templateUrl: './senac-coin.component.html',
  styleUrls: ['./senac-coin.component.css']
})
export class SenacCoinComponent implements OnInit {

  senacCoins : SenacCoin;
  senacCoinId : number;
  senacCoinSaldo : number;
  senacCoinStatus : number;

  constructor(private senacCoinService : SenacCoinService ) { }

  ngOnInit(): void {
   senacCoinId : localStorage.getItem("SenacCoinUser");
    this.senacCoinService.ObterSenacCoinPeloId(1).subscribe((resultado:SenacCoin) =>{
      this.senacCoins = resultado;
    });

  }
}
