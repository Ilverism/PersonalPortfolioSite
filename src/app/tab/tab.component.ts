import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
    ],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})

export class TabComponent {

  static tabIDCounter: number = 0;


  onTabClick() {
    this.clickEvent();
    this.emitTabID();
    this.emitPanelText();
  }

  @Input() clickEvent: Function = () => {};

  @Input() panelText:string = '';
  @Output() panelTextOut = new EventEmitter<string>();
  emitPanelText() {
    this.panelTextOut.emit(this.panelText);
    }

  @Input() description:string = "Click here to view...";
  @Output() panelDescriptionOut = new EventEmitter<string>();
  emitPanelDescription() {
    this.panelDescriptionOut.emit(this.description);
    }
  @Output() panelDescriptionClear = new EventEmitter<string>();
  emitClearPanelDescription() {
    this.panelDescriptionClear.emit();
    }

  @Input() name:string = "Tab";
  @Input() iconDef:IconProp = faCoffee;
  @Input() iconUrl:string = "";
  @Input() buttonColor:string = "blue";
  @Input() isExternalLink:boolean = false;

  @Input() tabID:number = (TabComponent.tabIDCounter++);
  @Output() outputTabID = new EventEmitter<string>();
  emitTabID() {
    console.log("Emitting Tab ID: " + this.tabID);
    this.outputTabID.emit(String(this.tabID));
    }



  }
