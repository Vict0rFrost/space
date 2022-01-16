import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Box(props) {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, props.texture);

  useFrame((state) => {
    ref.current.rotation.x += props.x;
  });

  return (
    <mesh ref={ref} {...props}>
      <sphereBufferGeometry attach="geometry" />
      <meshPhysicalMaterial attach="material" map={texture} color="white" />
    </mesh>
  );
}

export default Box;
