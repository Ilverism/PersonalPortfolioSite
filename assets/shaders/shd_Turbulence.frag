precision mediump float; // Specify the precision
varying vec2 vUv; // Receive the UV coordinates
uniform float time; // Receive the time
uniform float ratiofrag; // Receive the time

const float PI = 3.14159265359;

float random (in vec2 _st) {
    return fract(sin(dot(_st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);

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

#define NUM_OCTAVES 10

float fbm ( in vec2 _st) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5),
                    -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(_st);
        _st = rot * _st * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main() {

    vec2 st = (vUv) * 2.0 - 1.0;

    float T = time * 25.;

    st *= .25;
    
    vec2 q = vec2(0.);
    q.x = fbm( st);
    q.y = fbm( st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*T);
    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*T);

    float f = fbm(st+r);
    f = 256.*smoothstep(0., 16./f, f)/f;

//    f %= log(f)/fract(f*sinh(f))*.75;
    f = mod(f, abs(log(f)/fract(f*sin(f))*.75));
    
    vec3 col = mix(
        vec3(f, 0.00, 1.0-f),
        vec3(2.-f*f, 0.5*f, 0.75),
        f
        ) * f;
    
	gl_FragColor = vec4(col, 1.);
}