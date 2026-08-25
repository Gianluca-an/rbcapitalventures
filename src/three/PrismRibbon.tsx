import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Animated prismatic light ribbon — a flowing spectral caustic (à la Octolane)
 * over a soft silver-blue field. Rendered as a large plane behind the orb, so
 * the glass refracts the spectrum. Reacts to the pointer.
 */
const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;

  vec3 spectrum(float t) {
    t = fract(t);
    return 0.5 + 0.5 * cos(6.2831853 * (t + vec3(0.0, -0.3333, -0.6667)));
  }
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    float a = hash(i), b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  void main() {
    vec2 uv = vUv;
    float x = uv.x;
    float t = uTime;

    float wave = 0.5
      + 0.06 * sin(x * 3.0 + t * 0.55 + uMouse.x * 1.3)
      + 0.035 * sin(x * 7.0 - t * 0.9)
      + 0.05 * (noise(vec2(x * 2.0, t * 0.22)) - 0.5)
      + uMouse.y * 0.07;

    float d = uv.y - wave;
    float ad = abs(d);

    float core = smoothstep(0.013, 0.0, ad);   // thin bright spine
    float glow = smoothstep(0.135, 0.0, ad);   // tighter, more defined halo
    glow *= glow;

    // chromatic dispersion across the band thickness
    float disp = d * 4.0 + x * 0.6 + t * 0.13;
    vec3 col = spectrum(disp);

    // whiter core, richer colour toward the flanks (dispersion grows outward)
    float edge = smoothstep(0.0, 0.45, abs(x - 0.5));
    float sat = clamp(edge * 1.35 + smoothstep(0.0, 0.09, ad), 0.0, 1.0);
    col = mix(vec3(1.0), col, sat);

    float inten = core * 1.05 + glow * 0.7;

    vec3 bg = mix(vec3(0.965, 0.978, 0.996), vec3(0.855, 0.908, 0.982), uv.y);
    bg -= 0.012 * noise(uv * vec2(2.0, 80.0));

    vec3 outc = bg + col * inten * 2.15;
    gl_FragColor = vec4(outc, 1.0);
  }
`;

export function PrismRibbon({ reduced }: { reduced: boolean }) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const uniforms = useMemo(
    () => ({ uTime: { value: reduced ? 6 : 0 }, uMouse: { value: new THREE.Vector2(0, 0) } }),
    [reduced],
  );

  useFrame((state, delta) => {
    if (reduced || !mat.current) return;
    mat.current.uniforms.uTime.value += delta;
    mouse.current.x += (state.pointer.x - mouse.current.x) * 0.04;
    mouse.current.y += (state.pointer.y - mouse.current.y) * 0.04;
    mat.current.uniforms.uMouse.value.copy(mouse.current);
  });

  return (
    <mesh position={[0, 0.4, -4.5]} frustumCulled={false} renderOrder={-10}>
      <planeGeometry args={[17, 10]} />
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
        depthWrite={false}
        toneMapped={false}
      />
    </mesh>
  );
}
