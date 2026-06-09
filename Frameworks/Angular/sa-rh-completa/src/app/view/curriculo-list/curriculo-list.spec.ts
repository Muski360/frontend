import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { CurriculoList } from './curriculo-list';

describe('CurriculoList', () => {
  let component: CurriculoList;
  let fixture: ComponentFixture<CurriculoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculoList],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(CurriculoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
