import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShaderBackgroundComponent } from './shader-background/shader-background.component';
import { HorizontalButtonComponent } from './horizontal-button/horizontal-button.component';
import { TabComponent } from './tab/tab.component';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ShaderBackgroundComponent,
    HorizontalButtonComponent,
    TabComponent,
    NgScrollbarModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //Title
  title = 'PersonalPortfolioSite';

  tabIDSelected: number = 0;

  //Button Click Functions
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
    //this.tabIDSelected++;
    }

}