precision mediump float; // Specify the precision
varying vec2 vUv; // Receive the UV coordinates
uniform float time; // Receive the time
uniform float ratiofrag; // Receive the time

const float PI = 3.14159265359;



void main() {

    vec2 uv = (vUv) * 2.0 - 1.0;
    uv *= 0.50;
  
    float x = uv.x;
    float y = uv.y;

  	// Position of current point 
    float d = 0.0;

    y = mod(abs(y), 0.5);
    y *= 2.0;
    if (y < 0.) { y = 1.-y; }

    gl_FragColor = vec4(x, y, 0., 1.0);
    
    float T = time*PI*50.;

    d = sin(y*7. + T);
    
    float X = (x + PI*0.25)*22.;
    d /= sin(y*7. - X*sign(sin(X)));
    
    vec3 col = mix(
        vec3(d*0.2, 0.00, 0.00),
        vec3(0.00, 0.20, 1.00),
        d
        ) * d;

    gl_FragColor.rgb = col;
  gl_FragColor.a = 1.00;
}