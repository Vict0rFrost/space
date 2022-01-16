import { Box } from '@mui/material';

function Work(props) {
  const { openImage } = props;

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'wheat',
          color: 'black',
        }}
      >
        <Box sx={{ width: '150px' }}>Year</Box>
        <Box
          sx={{
            textAlign: 'right',
            width: '100%',
            paddingRight: '10px',
            ':hover': {
              cursor: 'pointer'
            },
          }}
        >
          Alphabet
        </Box>
      </Box>
      {projects.map((el) => (
        <Box
          onClick={() => openImage(el.id)}
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
          <Box sx={{ width: '150px' }}>{el.year}</Box>
          <Box sx={{ textAlign: 'right', width: '100%', paddingRight: '10px' }}>
            {el.nameEng}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Work;

export const projects = [
  {
    id: 1,
    nameEng: 'Author',
    nameRu: 'Автор книг для детей',
    year: 2020,
    img: '1.png',
    tech: ['WordPress', 'WP Elementor Plugin'],
    coords: [
      [110, 110, 110],
      [114, 114, 114],
    ],
  },
  {
    id: 2,
    nameEng: 'Travel in Japan',
    nameRu: 'Путешествие в Японии',
    year: 2020,
    img: '2.png',
    tech: ['HTML', 'CSS'],
    coords: [
      [114, 114, 114],
      [114, 112, 112],
    ],
  },
  {
    id: 3,
    nameEng: 'Dental Clinic',
    nameRu: 'Стоматология',
    year: 2020,
    img: '3.png',
    tech: ['WordPress', 'WP Fusion Builder'],
    coords: [
      [114, 112, 112],
      [116, 116, 116],
    ],
  },
  {
    id: 4,
    nameEng: 'Forum page',
    nameRu: 'Страница форума',
    year: 2020,
    img: '4.png',
    tech: ['HTML', 'CSS'],
    coords: [
      [116, 116, 116],
      [116, 122, 122],
    ],
  },
  {
    id: 5,
    nameEng: 'Crematory',
    nameRu: 'Крематорий',
    year: 2020,
    img: '5.png',
    tech: ['HTML', 'CSS'],
    coords: [
      [116, 122, 122],
      [132, 122, 116],
    ],
  },
  {
    id: 6,
    nameEng: 'Construction firm',
    nameRu: 'Строительная фирма',
    year: 2020,
    img: '7.png',
    tech: ['HTML', 'CSS'],
    coords: [
      [132, 122, 116],
      [132, 120, 11],
    ],
  },
  {
    id: 7,
    nameEng: 'Restaurant',
    nameRu: 'Ресторан',
    year: 2020,
    img: '8.png',
    tech: ['HTML', 'CSS'],
    coords: [
      [132, 120, 11],
      [132, 12, -111],
    ],
  },
  {
    id: 8,
    nameEng: 'Personal stylist',
    nameRu: 'Персональный стилист',
    year: 2020,
    img: '9.png',
    tech: ['HTML', 'CSS'],
    coords: [
      [132, 12, -111],
      [130, 114, -114],
    ],
  },
  {
    id: 9,
    nameEng: 'Safe contract',
    nameRu: 'Система безопасных контрактов',
    year: 2020,
    img: '10.png',
    tech: ['HTML', 'CSS'],
    coords: [
      [130, 114, -114],
      [144, 114, -114],
    ],
  },
  {
    id: 10,
    nameEng: 'Restaurant',
    nameRu: 'Ресторан',
    year: 2020,
    img: '11.png',
    tech: ['HTML', 'CSS'],
    coords: [
      [144, 114, -114],
      [144, 14, 14],
    ],
  },
  {
    id: 11,
    nameEng: 'Kids club',
    nameRu: 'Детский клуб',
    year: 2020,
    img: '12.png',
    tech: ['HTML', 'CSS', 'JS'],
    coords: [
      [144, 4, 4],
      [134, 114, 114],
    ],
  },
  {
    id: 12,
    nameEng: 'Resources',
    nameRu: 'Недра',
    year: 2021,
    img: '13.png',
    tech: ['JS', 'React', '2gis-maps API', 'Material UI'],
    coords: [
      [134, 14, 14],
      [154, 120, 120],
    ],
  },
  {
    id: 13,
    nameEng: 'Education service',
    nameRu: 'Образовательный сервис',
    year: 2021,
    img: '14.png',
    tech: ['JS', 'React', 'Material UI'],
    coords: [
      [154, 120, 120],
      [154, 124, 124],
    ],
  },
  {
    id: 14,
    nameEng: 'Energy service',
    nameRu: 'Энергетический сервис',
    year: 2021,
    img: '15.png',
    tech: ['JS', 'React', '2gis-maps API', 'Material UI'],
    coords: [
      [154, 124, 124],
      [144, 124, 124],
    ],
  },
  {
    id: 15,
    nameEng: 'Hospitalization service',
    nameRu: 'Сервис для госпитализации',
    year: 2021,
    img: '16.png',
    tech: ['JS', 'React', '2gis-maps API', 'Material UI'],
    coords: [
      [144, 124, 124],
      [141, 130, 144],
    ],
  },
  {
    id: 16,
    nameEng: 'Subsidy Finder',
    nameRu: 'Сервис по подбору субсидий',
    year: 2021,
    img: '17.png',
    tech: ['JS', 'React', 'Material UI'],
    coords: [
      [141, 130, 144],
      [149, 134, 138],
    ],
  },
  {
    id: 17,
    nameEng: 'Compensation service',
    nameRu: 'Компенсация выпадающих расходов',
    year: 2021,
    img: '18.png',
    tech: ['JS', 'React', 'Material UI'],
    coords: [
      [149, 134, 138],
      [154, 139, 134],
    ],
  },
  {
    id: 18,
    nameEng: 'Memory',
    nameRu: 'Поиск захоронения',
    year: 2021,
    img: '19.png',
    tech: ['JS', 'React', '2gis-maps API', 'Material UI'],
    coords: [
      [154, 139, 134],
      [154, 144, 144],
    ],
  },
  {
    id: 19,
    nameEng: 'Ferm market',
    nameRu: 'Онлайн рынок для фермеров',
    year: 2021,
    img: '20.png',
    tech: ['JS', 'React', 'Material UI'],
    coords: [
      [154, 144, 144],
      [154, 149, 134],
    ],
  },
  {
    id: 20,
    nameEng: 'Laboratory',
    nameRu: 'Лаборатория разработки прототипов',
    year: 2021,
    img: '21.png',
    tech: ['React', 'Material UI'],
    coords: [
      [154, 149, 134],
      [144, 144, 124],
    ],
  },
  {
    id: 21,
    nameEng: 'Versus',
    nameRu: 'Сервис для проведения турниров по теннису',
    year: 2021,
    img: 'bracket.gif',
    tech: ['JS', 'React', 'Socket io', 'Material UI'],
    coords: [
      [144, 144, 124],
      [134, 134, 134],
    ],
  },
  {
    id: 22,
    nameEng: 'BroWe',
    nameRu: 'Кофейня - Пространство для творчества',
    year: 2021,
    img: 'browe.gif',
    tech: ['WordPress', 'WP Elementor Plugin'],
    coords: [
      [134, 134, 134],
      [137, 134, 144],
    ],
  },
  {
    id: 23,
    nameEng: 'JewellryBase',
    nameRu: 'Личный кабинет ломбарда',
    year: 2021,
    img: 'jewwerly.png',
    tech: ['WordPress', 'WP Elementor Plugin'],
    coords: [[137, 134, 144]],
  },
];
