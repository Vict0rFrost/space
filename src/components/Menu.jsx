import { useState } from 'react';
import { Box } from '@mui/material';

function Menu(props) {
  const { data, setMoveTo } = props;

  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Box>

      <h1 onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }}>MENU</h1>
      </Box>

      {open ? (
        <Box>
          {data.map((el) => (
            <Box
              key={el.id}
              onClick={() => setMoveTo(el.position)}
              sx={{
                padding: '20px 0',
                cursor: 'pointer',
                border: '1px solid wheat',
                fontSize: '24px',
                ':hover': {
                  backgroundColor: 'wheat',
                  color: 'black',
                },
              }}
            >
              {el.name}
            </Box>
          ))}
        </Box>
      ) : null}
    </Box>
  );
}

export default Menu;
