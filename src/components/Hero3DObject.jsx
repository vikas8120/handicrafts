import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sparkles } from '@react-three/drei';

function Sculpture() {
  return (
    <group rotation={[0.2, 0.4, -0.1]}>
      <mesh castShadow receiveShadow position={[0, 0.15, 0]}>
        <torusKnotGeometry args={[0.9, 0.28, 180, 24]} />
        <meshStandardMaterial color="#caa07c" metalness={0.25} roughness={0.32} />
      </mesh>
      <mesh castShadow position={[0.4, -0.05, 0.1]}>
        <icosahedronGeometry args={[0.48, 0]} />
        <meshStandardMaterial color="#f4ebe3" metalness={0.1} roughness={0.25} />
      </mesh>
      <mesh castShadow position={[-0.7, -0.1, -0.05]}>
        <cylinderGeometry args={[0.18, 0.28, 1.4, 22]} />
        <meshStandardMaterial color="#8f6648" metalness={0.05} roughness={0.45} />
      </mesh>
    </group>
  );
}

export default function Hero3DObject() {
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-[2rem] border border-white/50 bg-white/55 shadow-luxury backdrop-blur-sm md:h-[520px]">
      <Canvas camera={{ position: [0, 0.2, 4.2], fov: 40 }} shadows>
        <color attach="background" args={['#f8f4ed']} />
        <ambientLight intensity={1.2} />
        <directionalLight castShadow position={[4, 5, 3]} intensity={2.1} shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
        <Float speed={1.1} rotationIntensity={0.7} floatIntensity={1.4}>
          <Sculpture />
        </Float>
        <Sparkles count={40} size={2.2} scale={[8, 8, 8]} opacity={0.2} speed={0.2} color="#a5723d" />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.65, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.18} />
        </mesh>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.1} />
      </Canvas>
    </div>
  );
}
