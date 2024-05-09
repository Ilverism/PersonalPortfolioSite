import { Component, ElementRef, ViewChild, OnInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';

@Component({
  selector: 'app-shader-background',
  standalone: true,
  imports: [HttpClientModule],
  template:'<div #shaderContainer></div>',
  styleUrls: ['./shader-background.component.css']
})
export class ShaderBackgroundComponent implements OnInit {

  @ViewChild('shaderContainer', { static: true }) containerRef!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, 
    private http: HttpClient  // Inject HttpClient
  ) {}

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;

  ngOnInit() {

    if (isPlatformBrowser(this.platformId) == false)
      return;

    const vertexShaderPath = 'assets/shaders/shd_Nihilism.vert';
    const fragmentShaderPath = 'assets/shaders/shd_Nihilism.frag';

    Promise.all([
      this.loadShader(vertexShaderPath),
      this.loadShader(fragmentShaderPath)
    ]).then(([vertexShader, fragmentShader]) => {
        this.initThree(vertexShader, fragmentShader);
    }).catch(error => console.error('Error loading shaders:', error));

    }

  private loadShader(path: string): Promise<string> {

    return this.http.get(path, { responseType: 'text' })
      .toPromise()
      .then(data => data || ''); //<-- Fallback to an empty string if 'undefined'

    }
  
  private initThree(vertexShader:string, fragmentShader:string) {

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: false });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.containerRef.nativeElement.appendChild(this.renderer.domElement);

    const composer = new EffectComposer(this.renderer);
    composer.addPass(new RenderPass(this.scene, this.camera));

    const material = new THREE.ShaderMaterial({

      uniforms: {
        time: { value: 0.00 },
        ratio: { value: window.innerWidth / window.innerHeight }
        },

      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    });

    const planeGeometry = new THREE.PlaneGeometry(2 * (window.innerWidth / window.innerHeight), 2, 1, 1);
    const plane = new THREE.Mesh(planeGeometry, material);
    this.scene.add(plane);
    this.camera.position.set(0, 0, 1);
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.animate(composer, material);
    }

  private animate(composer: EffectComposer, material: THREE.ShaderMaterial) {
    
    const startTime = Date.now();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = ((Date.now() - startTime) * 0.00_001);
      material.uniforms['time'].value = elapsedTime;
      composer.render();
      };

    animate();

    }

  @HostListener('window:resize')
  onResize() {
    const aspect = (window.innerWidth / window.innerHeight);
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
