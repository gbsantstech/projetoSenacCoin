import { TestBed } from '@angular/core/testing';

import { SenacCoinMovimentacaoService } from './senac-coin-movimentacao.service';

describe('SenacCoinMovimentacaoService', () => {
  let service: SenacCoinMovimentacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenacCoinMovimentacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
