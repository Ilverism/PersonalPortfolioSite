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
  vec2 pos = vec2(x, y);
  vec2 posIni = pos;
  pos.y -= (time * 8.00);
  pos *= 5.00;

  //Initialize Variables
  vec3 color = vec3(0.00);
  
  //Add a random position
  float DF = 0.50 + snoise(pos);

  //Add a random position (p2)

  float sinTime =1.0;// sin(time);
  //float cosTime = cos(time);
  //float a = snoise(pos * vec2(0.50, sinTime) * 0.20) * 3.1415;
  float a = snoise(posIni * sin(5.00*time) * sin(time) ) * 3.1415;
  
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