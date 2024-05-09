precision mediump float; // Specify the precision
varying vec2 vUv; // Receive the UV coordinates
uniform float time; // Receive the time
uniform float ratiofrag; // Receive the time

const float PI = 3.14159265359;


float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

#define OCTAVES 6
float fbm (in vec2 st) {
    // Initial values
    float value = 0.0;
    float amplitude = .5;
    float frequency = 0.;
    //
    // Loop of octaves
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * abs(noise(st));
        st *= 2.;
        amplitude *= .5;
    }
    return value;
}

float PI2 = 6.28318530718;

vec2 toPolar(vec2 cartesian){
	float dis = length(cartesian);
	float angle = atan(cartesian.y, cartesian.x);
	return vec2(dis, dis);
}


void main() {

    vec2 uv = (vUv) * 2.0 - 1.0;

    uv.x -= 4.00;
    //uv *= 0.50;
  
    float x = uv.x;
    float y = uv.y;



	vec2 center = vec2(0.0);

    float d = 0.;

    //p *= 20.;
    vec2 pOrg = uv;
    
    uv *= 10.;
    
    float T = (time*2.);
    T = mod(T, 2.*(1.-distance(pOrg, center))); 

    vec2 p = toPolar(uv);
    float F = fbm(p/T)/T;
    F += fbm(pOrg*p);
            
    d += fbm(p*1.0);
    d += fract(d*F);
    d *= distance(p, center)/F;
    
    vec2 R = reflect(p/(T*2000.), vec2(F));
    
    R = max(R*R, toPolar(R + T*0.001)/R);
    
    d /= max(R.x, R.y)*d*d*d*d*d*d*d*d;
    
    d *= min(1.-R.x, 1.-R.y);
    
    //d *= fbm(reflect(vec2(p), pOrg));
    
    pOrg /= d;
    d = max(
        fbm(reflect(toPolar(pOrg), pOrg)),
        fbm(reflect(pOrg, toPolar(pOrg)))
        );
    d *= 1.4*d;
    
    d *= 1.50;
    

  gl_FragColor.rgb = vec3(d);
  gl_FragColor.a = 1.00;

}