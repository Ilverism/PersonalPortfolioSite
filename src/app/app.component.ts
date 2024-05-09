import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShaderBackgroundComponent } from './shader-background/shader-background.component';
import { HorizontalButtonComponent } from './horizontal-button/horizontal-button.component';
import { TabComponent } from './tab/tab.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { PanelComponent } from './panel/panel.component';

//import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSteam, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { PanelShaderComponent } from './panel-shader/panel-shader.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ShaderBackgroundComponent,
    HorizontalButtonComponent,
    TabComponent,
    NgScrollbarModule,
    PanelComponent,
    PanelShaderComponent,
    FontAwesomeModule
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Icons
  faUser = faUser;
  faSteam = faSteam;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faYoutube = faYoutube;

  //Title
  title = 'PersonalPortfolioSite';

  panelTypeTargetName: string = "Default";
  constructor() { 
    this.onClickShaders = this.onClickShaders.bind(this);
  }
  
  panelText:string = "Hello! Welcome to my website!\n\nClick the buttons on the left to view additional information and content.\n\nButtons marked with (↗) will open a new tab in your browser.";
  tabDescriptionText:string = "''";

  tabIDSelected: number = 0;

  //Button Hovering
  hovering: boolean = false;
  onMouseEnter() { this.hovering = true; }
  onMouseLeave() { this.hovering = false; }

  //Button Click/Hover Functions
  handlePanelTextEvent(event:string) {
    this.panelText = event;
    this.handleClearTabDescriptionEvent("");
    }

  handleTabDescriptionEvent(event:string) {
    this.tabDescriptionText = event;
    }
  handleClearTabDescriptionEvent(event:string) {
    this.tabDescriptionText = "''";
    }

  onClickShaders(event: Event) {
    this.panelTypeTargetName = "shaderPanel";
    }
  onClickRingWar(event: Event) {
    window.open('https://store.steampowered.com/app/1909650/Ring_War/', '_blank');
    }
  onClickLinkedIn(event: Event) {
    window.open('https://www.linkedin.com/in/aidan-cusack-74406728b/', '_blank');
    }
  onClickGitHub(event: Event) {
    window.open('https://github.com/Ilverism/', '_blank');
    }
  onClickYouTube(event: Event) {
    window.open('https://www.youtube.com/@IlverismOST/', '_blank');
    }


  handleTabIDEvent(event:string) {
    console.log("Received Tab ID: " + event);
    this.tabIDSelected = parseInt(event);
    //this.tabIDSelected++;t
    }

}