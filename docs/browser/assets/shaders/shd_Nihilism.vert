varying vec2 vUv;
uniform float ratio;

void main() {
  
  vUv = uv;

  //For wider screens, adjust uv.x
  if (ratio > 1.0)
    vUv.x = (uv.x * ratio);

  //For taller screens, adjust uv.y
  else
    vUv.y = (uv.y / ratio);
    
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

  }