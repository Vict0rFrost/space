import { Line } from '@react-three/drei';

function Galaxy(props) {
  const { position, color } = props;

  return (
    <>
      {position ? (
        <mesh>
          <Line color={color} lineWidth={0.05} points={position.pos} />

          <mesh position={position?.pos[0]}>
            <sphereBufferGeometry attach="geometry" />
            <meshPhysicalMaterial attach="material" color={color} roughness={1}/>
          </mesh>
        </mesh>
      ) : null}
    </>
  );
}

export default Galaxy;
