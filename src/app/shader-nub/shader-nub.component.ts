import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit, Input, HostListener, AfterViewInit } from '@angular/core'
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';


@Component({
  selector: 'app-shader-nub',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './shader-nub.component.html',
  styleUrls: ['./shader-nub.component.css']
})
export class ShaderNubComponent implements AfterViewInit {

  //INPUT VARIABLES
  @Input() name: string = "[Unknown Shader!]";
  @Input() vertexShaderFilepath: string = "";
  @Input() fragmentShaderFilepath: string = "";

  //VIEWCHILD VARIABLES
  @ViewChild('shaderViewport') shaderViewport!: ElementRef<HTMLCanvasElement>;
  @ViewChild('shaderCanvas') shaderCanvas!: ElementRef<HTMLCanvasElement>;

  //COMPONENT VARIABLES
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private material!: THREE.ShaderMaterial;
  private composer!: EffectComposer;

  previewImageSrc: string = "";
  isAnimating: boolean = false;

  private requestId: number = -1;


  //CONSTRUCTOR
  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {

    Promise.all([
      this.loadShader(this.vertexShaderFilepath),
      this.loadShader(this.fragmentShaderFilepath)
    ]).then(([vertexShader, fragmentShader]) => {
      this.initThree(vertexShader, fragmentShader);
    }).catch(error => console.error('Error loading shaders:', error));
  
    this.shaderViewport.nativeElement.addEventListener('mouseenter', this.startAnimation.bind(this));
    this.shaderViewport.nativeElement.addEventListener('mouseleave', this.stopAnimation.bind(this));
    
    }

  private startAnimation() {

    if (this.isAnimating==false) {
      this.isAnimating = true;
      // console.log("Starting Animation");
      this.animate(this.composer, this.material);
      }

    }
  
    private stopAnimation() {
      if (this.requestId) {
          cancelAnimationFrame(this.requestId);
          this.requestId = -1;
      }
      this.isAnimating = false;
      // console.log("Stopping Animation");
  }

  private loadShader(path: string): Promise<string> {

    return this.http.get(path, { responseType: 'text' })
      .toPromise()
      .then(data => {
        // console.log(`Shader loaded from ${path}:`, data); // Log the shader content
        return data || ''; // Fallback to an empty string if undefined
      });

    }

  @HostListener('window:resize')
  onResize() {

    const ratioScale = (0.20);
    let aspect = 0.50 * (1/ratioScale) * (window.innerWidth / window.innerHeight);

    // this.camera.aspect = aspect;
    // this.camera.updateProjectionMatrix();
    // this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.shaderCanvas.nativeElement.clientWidth, this.shaderCanvas.nativeElement.clientHeight);

    
    this.material.uniforms['ratio'].value = 0.50 * (1/ratioScale) * (window.innerWidth / window.innerHeight);

    }
    

  private initThree(vertexShader: string, fragmentShader: string): void {

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.shaderCanvas.nativeElement,
      alpha: false, //Support transparent background
      antialias: false
      });
    
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.shaderCanvas.nativeElement.clientWidth, this.shaderCanvas.nativeElement.clientHeight);

    const ratioScale = (0.20);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, ratioScale*this.shaderCanvas.nativeElement.clientWidth / this.shaderCanvas.nativeElement.clientHeight, 0.1, 1000);
    this.camera.position.z = 1;

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));


    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.00 },
        ratio: { value: (1/ratioScale/2)*window.innerWidth / window.innerHeight }
        },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
      });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const plane = new THREE.Mesh(geometry, this.material);
    this.scene.add(plane);
    this.animate(this.composer, this.material);

    this.capturePreview();  
  
    }


  // private animate(composer: EffectComposer, material: THREE.ShaderMaterial) {
  //   const startTime = Date.now();
  //   const animateLoop = () => {
  //       if (this.isAnimating) {
  //           this.requestId = requestAnimationFrame(animateLoop);
  //           const elapsedTime = ((Date.now() - startTime) * 0.00001);
  //           material.uniforms['time'].value = elapsedTime;
  //           composer.render();
  //       }
  //   };

  //   if (this.isAnimating) {
  //       animateLoop();
  //   }
  // }

  private animate(composer: EffectComposer, material: THREE.ShaderMaterial) {
    if (this.requestId < 0) {
        const startTime = Date.now();
        const animateLoop = () => {
            if (this.isAnimating) {
                this.requestId = requestAnimationFrame(animateLoop);
                const elapsedTime = ((Date.now() - startTime) * 0.00001);
                material.uniforms['time'].value = elapsedTime;
                composer.render();
            } else {
                cancelAnimationFrame(this.requestId);
                this.requestId = -1;
            }
        };
        animateLoop();
      }
  }



  private capturePreview() {

    const ratioScale = (0.20);
    let aspect = 0.50 * (1/ratioScale) * (window.innerWidth / window.innerHeight);
    this.renderer.setSize(this.shaderCanvas.nativeElement.clientWidth, this.shaderCanvas.nativeElement.clientHeight);    
    this.material.uniforms['ratio'].value = 0.50 * (1/ratioScale) * (window.innerWidth / window.innerHeight);


    const image = new Image();
    this.renderer.render(this.scene, this.camera); // Ensure the scene is rendered
    image.src = this.renderer.domElement.toDataURL();
    this.previewImageSrc = image.src; // Assign it here

    }

  

  }
