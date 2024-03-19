import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})

export class TabComponent {

  static tabIDCounter: number = 0;

  @Input() name:string = "Tab";
  @Input() icon:string = "fa fa-circle";
  @Input() buttonColor:string = "blue";
  @Input() isExternalLink:boolean = false;

  @Input() tabID:number = (TabComponent.tabIDCounter++);
  @Output() outputTabID = new EventEmitter<string>();
  emitTabID() {
    console.log("Emitting Tab ID: " + this.tabID);
    this.outputTabID.emit(String(this.tabID));
    }


  }
