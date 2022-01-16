import { Box } from '@mui/material';

function Stack() {
  return (
    <Box>
      <Box>
        {data.map((el) => (
          <Box
            key={el.id}
            sx={{
              padding: '5px 0',
              cursor: 'pointer',
              border: '1px solid wheat',
              fontSize: '20px',
              display: 'flex',
              ':hover': {
                backgroundColor: 'wheat',
                color: 'black',
              },
            }}
          >
            <Box sx={{ width: '150px' }}>{el.type}</Box>
            <Box
              sx={{ textAlign: 'right', width: '100%', paddingRight: '10px' }}
            >
              {el.tech}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Stack;

const data = [
  {
    id: 1,
    type: 'front',
    tech: 'HTML',
  },
  {
    id: 2,
    type: 'front',
    tech: 'CSS',
  },
  {
    id: 3,
    type: 'front',
    tech: 'React',
  },
  {
    id: 4,
    type: 'front',
    tech: 'Redux',
  },
  {
    id: 5,
    type: 'front',
    tech: 'Websocket',
  },
  {
    id: 6,
    type: 'back',
    tech: 'Node JS',
  },
  {
    id: 7,
    type: 'back',
    tech: 'Express',
  },
  {
    id: 8,
    type: 'back',
    tech: 'Mongo DB/(Mongoose) -NoSQL',
  },
  {
    id: 9,
    type: 'back',
    tech: 'Firebase -SQL',
  },
  {
    id: 10,
    type: 'back',
    tech: 'PostgresQL -SQL',
  },
  {
    id: 11,
    type: 'styles',
    tech: 'Bootstrap (v3, v4, v5)',
  },
  {
    id: 12,
    type: 'styles',
    tech: 'Material UI (v4, v5)',
  },
  {
    id: 13,
    type: 'styles',
    tech: 'Styled Component',
  },
  {
    id: 14,
    type: 'API',
    tech: 'Google Cloud Vision',
  },
  {
    id: 15,
    type: 'API',
    tech: 'Telegraf (Telegram bot)',
  },
  {
    id: 16,
    type: 'API',
    tech: 'Codewars',
  },
  {
    id: 17,
    type: 'front',
    tech: 'Three JS',
  },
  {
    id: 18,
    type: 'front',
    tech: 'React-three-fiber',
  },
  {
    id: 19,
    type: 'front',
    tech: 'drei',
  },
  {
    id: 20,
    type: 'API',
    tech: '2gis-maps',
  },
];
