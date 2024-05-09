import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

  @Input()
  panelText:string = '';

  @Input()
  backgroundColor:string = '#000000EE';

  }