import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaderPreviewComponent } from './shader-preview.component';

describe('ShaderPreviewComponent', () => {
  let component: ShaderPreviewComponent;
  let fixture: ComponentFixture<ShaderPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShaderPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShaderPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
