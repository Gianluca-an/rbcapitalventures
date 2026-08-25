import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  Float,
  MeshTransmissionMaterial,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import { prefersReducedMotion } from "./hasWebGL";

/* Pointer parallax — reads a smoothed pointer and eases the camera. */
function Rig({ reduced }: { reduced: boolean }) {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });
  const base = useRef({ x: 0, y: 0.55 });

  useFrame((state) => {
    if (reduced) {
      camera.position.x += (base.current.x - camera.position.x) * 0.1;
      camera.position.y += (base.current.y - camera.position.y) * 0.1;
      camera.lookAt(0, 0.5, 0);
      return;
    }
    target.current.x = state.pointer.x * 0.55;
    target.current.y = base.current.y + state.pointer.y * 0.3;
    camera.position.x += (target.current.x - camera.position.x) * 0.045;
    camera.position.y += (target.current.y - camera.position.y) * 0.045;
    camera.lookAt(0, 0.5, 0);
  });
  return null;
}

function GlassOrb({ reduced }: { reduced: boolean }) {
  return (
    <Float
      speed={reduced ? 0 : 1.1}
      rotationIntensity={reduced ? 0 : 0.25}
      floatIntensity={reduced ? 0 : 0.7}
      floatingRange={[-0.08, 0.12]}
    >
      <mesh castShadow position={[0, 0.62, 0]}>
        <sphereGeometry args={[1.12, 96, 96]} />
        <MeshTransmissionMaterial
          samples={8}
          resolution={512}
          transmission={1}
          roughness={0.05}
          thickness={1.2}
          ior={1.4}
          chromaticAberration={0.08}
          anisotropicBlur={0.16}
          distortion={0.16}
          distortionScale={0.28}
          temporalDistortion={reduced ? 0 : 0.06}
          clearcoat={1}
          attenuationColor="#d9edff"
          attenuationDistance={2.6}
          color="#f1f8ff"
          background={new THREE.Color("#f2f8fe")}
        />
      </mesh>
    </Float>
  );
}

function Sky() {
  // Procedural environment (no external HDR) — this is what the glass refracts/reflects.
  return (
    <Environment resolution={256}>
      <group>
        <Lightformer form="rect" intensity={2.6} position={[0, 4, -6]} scale={[14, 8, 1]} color="#ffffff" />
        <Lightformer form="rect" intensity={1.1} position={[0, -3, -4]} scale={[14, 5, 1]} color="#dcebfb" />
        <Lightformer form="circle" intensity={3} position={[3.5, 2, 3]} scale={2.4} color="#f2f8ff" />
        <Lightformer form="ring" intensity={1.3} position={[-4, 0.8, 2]} scale={3} color="#a9d0f6" />
        <Lightformer form="circle" intensity={1} position={[-2, -1, 3]} scale={1.5} color="#7fd0e8" />
      </group>
    </Environment>
  );
}

export function Orb() {
  const reduced = prefersReducedMotion();
  return (
    <Canvas
      className="orb-canvas"
      dpr={[1, 1.8]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0.55, 6.2], fov: 32 }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 3]} intensity={1.15} />
      <directionalLight position={[-4, 2, -2]} intensity={0.5} color="#9cc6f5" />

      <GlassOrb reduced={reduced} />
      {!reduced && <Sparkles count={40} scale={[9, 5, 4]} size={2.2} speed={0.28} color="#3e8fe0" opacity={0.55} position={[0, 0.6, 1]} />}

      <Sky />
      <Rig reduced={reduced} />
    </Canvas>
  );
}
