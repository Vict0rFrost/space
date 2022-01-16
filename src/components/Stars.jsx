import { Line } from '@react-three/drei';

function Stars(props) {
  const { position, color } = props;

  useFrame((state) => {
    
  });

  return (
    <>
    {position ?
      <mesh>
        <Line color={color} lineWidth={0.1} points={position.pos} />
  
        <mesh position={position?.pos[0]} >
          <sphereBufferGeometry attach="geometry" />
          <meshPhysicalMaterial attach="material" color={color} />
        </mesh>
      </mesh>
      : null
    }
    </>
  );
}

export default Stars;
