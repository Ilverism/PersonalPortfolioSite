import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-horizontal-button',
  templateUrl: './horizontal-button.component.html',
  styleUrl: './horizontal-button.component.css'
})


export class HorizontalButtonComponent {

  @Input() buttonText:string = "Button";
  @Input() buttonColor:string = "blue";
  @Input() buttonOpacity:number = 1.00;
  @Input() iconClass:string = "";
  @Output() onClick:Function = () => {};

  handleClick(event:Event):void {
    this.onClick(event);
    }

  }
