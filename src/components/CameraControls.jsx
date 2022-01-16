import { useFrame } from '@react-three/fiber';

const CameraControls = (props) => {
  const { setMenu, setRotation, setMoveTo, moveTo, reset } = props;

  useFrame((state) => {
    if (moveTo) {
      setMenu(false);
      setRotation(false);
      
      if (Math.floor(state.camera.position.x) !== moveTo[0] - 10) {
        if (Math.floor(state.camera.position.x) < moveTo[0]) {
          state.camera.position.x += 1;
        } else {
          state.camera.position.x -= 1;
        }
      }

      if (Math.floor(state.camera.position.y) !== moveTo[1]) {
        if (Math.floor(state.camera.position.y) < moveTo[1]) {
          state.camera.position.y += 1;
        } else {
          state.camera.position.y -= 1;
        }
      }

      if (Math.floor(state.camera.position.z) !== moveTo[2]) {
        if (Math.floor(state.camera.position.z) < moveTo[2]) {
          state.camera.position.z += 1;
        } else {
          state.camera.position.z -= 1;
        }
      }

      if (
        Math.floor(state.camera.position.x) == moveTo[0] &&
        Math.floor(state.camera.position.y) == moveTo[1] &&
        Math.floor(state.camera.position.z) == moveTo[2]
      ) {
        setMoveTo(null);
        setRotation(true);
      }
    }

    if (
      Math.floor(state.camera.position.x) == -500 &&
      Math.floor(state.camera.position.y) == 10 &&
      Math.floor(state.camera.position.z) == 20
    ) {
      setMenu(true);
    }
  });

  return null;
};

export default CameraControls;
