import { Box } from '@mui/material';

function Image(props) {
  const { image } = props;

  return (
    <Box>
      <Box>
        <h1>{image.nameEng}</h1>
      </Box>

      <Box width="100%" height="600px">
        <img
          src={`/images/${image.img}`}
          alt="pic"
          style={{ width: 'inherit', height: 'inherit', objectFit: 'contain' }}
        />
      </Box>
    </Box>
  );
}

export default Image;
