import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

import Box from './components/Box';
import Content from './components/Content';
import Title from './components/Title';
import Menu from './components/Menu';
import SideMenu from './components/SideMenu';
import Image from './components/Image';
import { projects } from './components/Work';
import CameraControls from './components/CameraControls';
import Galaxy from './components/Galaxy';

function App() {
  const [title, setTitle] = useState(false);
  const [content, setContent] = useState(false);
  const [image, setImage] = useState(null);
  const [contentItem, setContentItem] = useState(null);
  const [value, setValue] = useState();
  const [center, setCenter] = useState(false);
  const [list, setList] = useState([]);
  const [rotation, setRotation] = useState(true);
  const [menu, setMenu] = useState(true);
  const [star, setStar] = useState();
  const [moveTo, setMoveTo] = useState();

  let camera = { position: [-500, 10, 20] };

  const reset = () => {
    setImage(null);
    setContentItem(null);
    setValue(null);
    setTitle(false);
    setContent(false);
    setCenter(false)
    setMenu(true)
  };

  const openImage = (id) => {
    const item = projects.find((el) => el.id === id);

    if (item) {
      setImage(item);
      openProject(item.id)
    }
  };


  const openTitle = (id) => {
    const item = data.find((el) => el.id === id);

    if (item) {
      setValue(item);
      setTitle(true);
    }
  };

  const opeContent = (id) => {
    setMenu(false)
    const item = data.find((el) => el.id === id);

    if (item) {
      setContentItem(item);
      setContent(true);
    }
  };

  const RandomArr = (arr) => {
    function getRandomInRange(min, max) {
      const a = Math.random() < 0.5 ? -1 : 1;
      return (Math.floor(Math.random() * (max - min + 1)) + min) * a;
    }

    if (arr) {
      let nextStar = arr.map((el) => {
        return el + getRandomInRange(10, 30);
      });
      return nextStar;
    }
  };

  const starPosition = (projects, start) => {
    let temp;
    let test;

    const upgradeList = projects.map((el) => {
      if (el.id === 1) {
        temp = RandomArr(start);
        el.pos = [start, temp];
        return el;
      } else if (el.id === projects.length) {
        el.pos = [temp];
        return el;
      } else {
        test = RandomArr(temp);
        if (test > 100) {
          test = RandomArr(temp);
        }
        el.pos = [temp, test];
        temp = test;
        return el;
      }
    });

    return setList(upgradeList);
  };

  const openProject = (id) => {
    const item = list.find((el) => el.id === id);
    setMoveTo(item.pos[0]);
    setCenter(true)
  };

  useEffect(() => {
    if (projects) {
      starPosition(projects, [100, 100, 100]);
    }
  }, [projects]);

  return (
    <div id="canvas-container" className="App">
      <Canvas style={{ height: '98vh' }} camera={camera}>
        <OrbitControls autoRotate autoRotateSpeed={rotation ? 0.4 : 0} />
      
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={8}
          saturation={0}
          fade
        />
        <ambientLight intensity={0.5} />

        {data.map((el) => (
          <Suspense fallback={null}>
            <Box
              key={el.id}
              position={el.position}
              scale={el.scale}
              texture={el.texture}
              x={el.x}
              y={el.y}
              z={el.z}
              onPointerOver={(e) => openTitle(el.id)}
              onClick={(e) => opeContent(el.id)}
              sx={{ cursor: 'pointer' }}
            />
          </Suspense>
        ))}

        {list?.map((star) => (
          <Suspense fallback={null}>
            <Galaxy position={star} color={'#03e3fb'} />
          </Suspense>
        ))}

        <CameraControls
          menu={menu}
          setMenu={setMenu}
          star={star}
          setStar={setStar}
          rotation={rotation}
          setRotation={setRotation}
          moveTo={moveTo}
          setMoveTo={setMoveTo}
          reset={reset}
        />
      </Canvas>

      {title ? (
        <div id="title">
          <Title value={value} />
        </div>
      ) : null}

      {content ? (
        <div id="content">
          <Content value={contentItem} openImage={openImage} />
        </div>
      ) : null}

      {image ? (
        <div id="image">
          <Image image={image} openProject={openProject} />
        </div>
      ) : null}

      {menu ? (
        <div id="menu">
          <Menu data={data} setMoveTo={setMoveTo} />
        </div>
      ) : null}

      <div id="sidemenu">
        <SideMenu
          reset={reset}
          setRotation={setRotation}
          rotation={rotation}
          setMoveTo={setMoveTo}
        />
      </div>
    </div>
  );
}

export default App;

const data = [
  {
    id: 1,
    name: 'AboutMe',
    ruName: 'Обо мне',
    texture: '/vozduh.jpeg',
    position: [4, 0, 34],
    scale: '4',
    x: 0.003,
    y: 0.003,
    z: 0.003,
  },
  {
    id: 2,
    name: 'Stack',
    ruName: 'Стек технологий',
    texture: '/fire.jpg',
    position: [-4, 9, -24],
    scale: '5',
    x: 0.003,
    y: 0.003,
    z: 0.003,
  },
  {
    id: 3,
    name: 'MyWork',
    ruName: 'Моя работа',
    texture: '/planet4.jpg',
    position: [-25, 7, 10],
    scale: '6',
    x: 0.003,
    y: 0.003,
    z: 0.003,
  },
  {
    id: 4,
    name: 'Contacts',
    ruName: 'Контакты',
    texture: '/test.jpg',
    position: [12, 7, 10],
    scale: '1.7',
    x: 0.003,
    y: 0.003,
    z: 0.003,
  },
];
