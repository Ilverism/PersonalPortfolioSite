import { Component, ElementRef, ViewChild, OnInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';


@Component({
  selector: 'app-shader-background',
  standalone: true,
  imports: [],
  //templateUrl: './shader-background.component.html',
  template:'<div #shaderContainer></div>',
  styleUrl: './shader-background.component.css'
})
export class ShaderBackgroundComponent implements OnInit {

  @ViewChild('shaderContainer', { static: true }) containerRef!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  //Variables
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;

  ngOnInit() {

    //Incorrect Platform
    if (isPlatformBrowser(this.platformId) == false)
      return;
  
    // Your Three.js initialization code here
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({antialias: true});

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.containerRef.nativeElement.appendChild(this.renderer.domElement);

    const composer = new EffectComposer(this.renderer);
    composer.addPass(new RenderPass(this.scene, this.camera));


    //Blur Shader
    const blurShader = {
      uniforms: {
          "tDiffuse": { value: null },
          "resolution": { value: new THREE.Vector2() },
          "radius": { value: 0.5 }
      },
      vertexShader: `
          varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
      `,
      fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform vec2 resolution;
      uniform float radius;
      
      varying vec2 vUv;
      
      void main() {
          vec2 uv = vUv;
          vec2 texelSize = 1.0 / resolution;
          vec4 result = vec4(0.0);
          float weightSum = 0.0;
      
          for(int i = -8; i <= 8; i++) {
              for(int j = -8; j <= 8; j++) {
                  vec2 offset = vec2(float(i), float(j)) * texelSize * radius;
                  float weight = exp(-0.5 * (pow(offset.x * resolution.x / radius, 2.0) + pow(offset.y * resolution.y / radius, 2.0)));
                  result += texture2D(tDiffuse, uv + offset) * weight;
                  weightSum += weight;
              }
          }
      
          gl_FragColor = result / weightSum;
      }
      
      `
    };
  
    
    const blurPass = new ShaderPass(blurShader);
    blurPass.uniforms["resolution"].value = new THREE.Vector2(window.innerWidth, window.innerHeight);
    blurPass.uniforms["radius"].value = 2.0;
    composer.addPass(blurPass);

    
    //Shader Material and other Three.js setup...
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: {value: 0.00},
        ratio: {value: window.innerWidth / window.innerHeight},
        ratiofrag: {value: window.innerWidth / window.innerHeight}
      },
      vertexShader: `
        varying vec2 vUv;
        uniform float ratio;

        void main() {
          vUv = uv;
          if (ratio > 1.0) {
            // For wider screens, adjust uv.x
            vUv.x = uv.x * ratio;
          } else {
            // For taller screens, adjust uv.y
            vUv.y = uv.y / ratio;
          }
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float; // Specify the precision
        varying vec2 vUv; // Receive the UV coordinates
        uniform float time; // Receive the time
        uniform float ratiofrag; // Receive the time

        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
        
        float snoise(vec2 v) {
            const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                                0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                                -0.577350269189626,  // -1.0 + 2.0 * C.x
                                0.024390243902439); // 1.0 / 41.0
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod289(i); // Avoid truncation effects in permutation
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                + i.x + vec3(0.0, i1.x, 1.0 ));
        
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m *= m *= m *= m;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = ceil(x + 0.5);
            vec3 a0 = x - ox;
            m /= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
            vec3 g;
            g.x  = a0.x  - x0.x  + h.x  * x0.y;
            g.yz = a0.yz - x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
        }

        void main() {

          float x = vUv.x;
          float y = vUv.y;

          //Position of current point
          vec2 st = vec2(x, y);
          st.y -= (time * 8.00);
          st *= 0.50;

          //Initialize Variables
          vec3 color = vec3(0.00);
          vec2 pos = vec2(st * 10.0);
          
          //Add a random position
          float DF = 0.50;
          float a = 0.00;
          float T = mix(-10.00, 10.000, time*6.28318530718);
          vec2 vel = vec2(T);
          DF += snoise(pos) * 1.00;

          //Add a random position (p2)
          pos -= vel;
          a = snoise(pos*vec2(0.50,sin(time*1.00))*0.20)*3.1415;
          //a = snoise(pos*vec2(cos(time*1.00),sin(time*1.00))*0.20)*3.1415;
          vel = vec2(cos(a), sin(a));
          
          //Get pixel value
          float d = smoothstep(0.00, 1.00, fract(DF - a));

          //Calculate color
          color = mix(
            vec3(0.30, 0.00, 0.950),
            vec3(0.10, 0.50, 0.625),
            clamp(d, 0.0, 1.0) 
            ) * d;
    
          gl_FragColor = vec4(color, 1.0);
          gl_FragColor.rgb *= clamp(
            (2.50 - 3.00 * y / length(color)),
            0.90 - y,
            y*30.00
            );
        }
      `
    });
    

    
    //Create Plane Geometry that is guaranteed to fill the screen
    var baseSize:number = 2;
    var aspect = window.innerWidth / window.innerHeight;
    const planeGeometry = (
      (aspect > 1.00)
      ? new THREE.PlaneGeometry(baseSize*aspect, baseSize)
      : new THREE.PlaneGeometry(baseSize, baseSize*aspect)
      );
    const plane = new THREE.Mesh(planeGeometry, material);
    this.scene.add(plane);

    //camera.position.z = 1;
    this.camera.position.set(0, 0, 1);

    const startTime = Date.now();
    const animate = () => {
      requestAnimationFrame(animate);

      // Update the time uniform
      const elapsedTime = (Date.now() - startTime) * 0.00_001; // Time in seconds
      material.uniforms['time'].value = elapsedTime;


      //renderer.render(scene, camera);
      composer.render();
    };

    animate();
  }
  
  @HostListener('window:resize')
  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

}