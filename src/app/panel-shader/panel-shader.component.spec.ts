import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelShaderComponent } from './panel-shader.component';

describe('PanelShaderComponent', () => {
  let component: PanelShaderComponent;
  let fixture: ComponentFixture<PanelShaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelShaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelShaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
