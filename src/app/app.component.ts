import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShaderBackgroundComponent } from './shader-background/shader-background.component';
import { HorizontalButtonComponent } from './horizontal-button/horizontal-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ShaderBackgroundComponent, HorizontalButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'PersonalPortfolioSite';

  onClickLinkedIn(event: Event) {
    window.open('https://www.linkedin.com/in/aidan-cusack-74406728b/', '_blank');
    }
  onClickGitHub(event: Event) {
    window.open('https://github.com/Ilverism/', '_blank');
    }
  onClickYouTube(event: Event) {
    window.open('https://www.youtube.com/@IlverismOST/', '_blank');
    }  

}