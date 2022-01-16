import { Box } from '@mui/material';
import { useState, useCallback } from 'react';
import produce from 'immer';

function SideMenu(props) {
  const [todos, setTodos] = useState(side);

  const { reset, setRotation, rotation, setMoveTo } = props;

  const handleToggle = useCallback(
    (id) => {
      // setTodos(
      //   produce((draft) => {
      //     const todo = draft.find((todo) => todo.id === id);
      //     todo.toggle = !todo.toggle;
      //   })
      // );

      switcher(id);
    },
    [todos]
  );

  const switcher = (id) => {
    const item = todos.find((el) => el.id === id);

    switch (item.text) {
      case 'orbit':
        setMoveTo([-500, 10, 20]);
        break;
      case 'reset':
        reset();
        break;
      case 'pause':
        setRotation(!rotation);
        break;
      default:
        break;
    }
  };

  return (
    <Box display="flex">
      {todos.map((el) => (
        <Box
          onClick={() => handleToggle(el.id)}
          className="side"
          key={el.id}
          sx={{
            width: '50px',
            border: '1px solid wheat',
            padding: '15px 5px',
            cursor: 'pointer',
            ':hover': {
              backgroundColor: 'wheat',
              color: 'black',
            },
          }}
        >
          <Box>{el.front}</Box>
        </Box>
      ))}
    </Box>
  );
}

export default SideMenu;

const side = [
  {
    id: 1,
    text: 'orbit',
    front: 'Orbit',
  },
  {
    id: 3,
    text: 'reset',
    front: 'Reset',
  },
  {
    id: 4,
    text: 'pause',
    front: 'Pause',
  },
];
