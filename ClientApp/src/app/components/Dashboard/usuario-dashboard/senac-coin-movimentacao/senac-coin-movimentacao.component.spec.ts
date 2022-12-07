import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenacCoinMovimentacaoComponent } from './senac-coin-movimentacao.component';

describe('SenacCoinMovimentacaoComponent', () => {
  let component: SenacCoinMovimentacaoComponent;
  let fixture: ComponentFixture<SenacCoinMovimentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenacCoinMovimentacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenacCoinMovimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
