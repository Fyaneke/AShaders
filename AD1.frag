#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.005, pct, st.y) -
          smoothstep( pct, pct+0.005, st.y);
}

void main() {    
    vec2 st = gl_FragCoord.xy/u_resolution;
    // First line
    float y1 = pow(st.x,5.0);
    float pct = plot(st,y1);
    // Second line
    float y2 = sin(st.x*PI);
    float pct2 = plot(st,y2);

    vec3 color = vec3(1);

    color = mix(color,vec3(0.0,1.0,0.0),pct);
    color = mix(color,vec3(1.0,0.0,0.0),pct2);
    
    gl_FragColor = vec4(color,1.0);
}