import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShaderBackgroundComponent } from './shader-background/shader-background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShaderBackgroundComponent],
  templateUrl: './app.component.html',
  //templateUrl: './shader-background/shader-background.component.html',
  //template: '<app-shader-background></app-shader-background>',
  styleUrl: './app.component.css'
})
export class AppComponent { }
