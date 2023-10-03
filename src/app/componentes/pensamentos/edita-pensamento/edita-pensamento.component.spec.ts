import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPensamentoComponent } from './edita-pensamento.component';

describe('EditaPensamentoComponent', () => {
  let component: EditaPensamentoComponent;
  let fixture: ComponentFixture<EditaPensamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditaPensamentoComponent]
    });
    fixture = TestBed.createComponent(EditaPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
