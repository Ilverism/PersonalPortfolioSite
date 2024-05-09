import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { PanelComponent } from '../panel/panel.component';
import { ShaderNubComponent } from '../shader-nub/shader-nub.component';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-panel-shader',
  standalone: true,
  imports: [CommonModule, NgFor, PanelComponent, ShaderNubComponent, NgScrollbarModule],
  templateUrl: './panel-shader.component.html',
  styleUrls: ['./panel-shader.component.css', '../panel/panel.component.css']
})
export class PanelShaderComponent extends PanelComponent {

  //Variables
  //...

  //Constructor
  constructor() {
    super();
    }

  //Define List of Nubs
  nubs: ShaderNubData[] = [
    {
      name : "N I H I L I S M",
      vertexShaderFilepath : "../assets/shaders/shd_Default.vert",
      fragmentShaderFilepath : "../assets/shaders/shd_Nihilism.frag",
    },
    {
      name: "I N N E R - F I R E",
      vertexShaderFilepath : "../assets/shaders/shd_Default.vert",
      fragmentShaderFilepath: "../assets/shaders/shd_InnerFire.frag",
    },
    {
      name: "T H R U S T E R S",
      vertexShaderFilepath : "../assets/shaders/shd_Default.vert",
      fragmentShaderFilepath: "../assets/shaders/shd_Thrusters.frag",
    },
    {
      name: "R O C K E T",
      vertexShaderFilepath : "../assets/shaders/shd_Default.vert",
      fragmentShaderFilepath: "../assets/shaders/shd_Rocket.frag",
    },
    {
      name: "P S I - D R U M",
      vertexShaderFilepath : "../assets/shaders/shd_Default.vert",
      fragmentShaderFilepath: "../assets/shaders/shd_PsiDrum.frag",
    },
    {
      name: "S C A N N E R",
      vertexShaderFilepath : "../assets/shaders/shd_Default.vert",
      fragmentShaderFilepath: "../assets/shaders/shd_Scanner.frag",
    },
    {
      name: "M A T T E R F L O W E R",
      vertexShaderFilepath : "../assets/shaders/shd_Default.vert",
      fragmentShaderFilepath: "../assets/shaders/shd_Matterflower.frag",
    },
    {
      name: "L A T T I C E",
      vertexShaderFilepath : "../assets/shaders/shd_Default.vert",
      fragmentShaderFilepath: "../assets/shaders/shd_Lattice.frag",
    },
    {
      name: "G A L A C T I C - S E A M",
      vertexShaderFilepath : "../assets/shaders/shd_Default.vert",
      fragmentShaderFilepath: "../assets/shaders/shd_GalacticSeam.frag",
    },
    {
      name: "T U R B U L E N C E",
      vertexShaderFilepath : "../assets/shaders/shd_Default.vert",
      fragmentShaderFilepath: "../assets/shaders/shd_Turbulence.frag",
    },
  ];

}

interface ShaderNubData {
  name: string;
  vertexShaderFilepath: string;
  fragmentShaderFilepath: string;
  }