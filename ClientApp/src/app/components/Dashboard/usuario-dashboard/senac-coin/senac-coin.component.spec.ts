import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenacCoinComponent } from './senac-coin.component';

describe('SenacCoinComponent', () => {
  let component: SenacCoinComponent;
  let fixture: ComponentFixture<SenacCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenacCoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenacCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
