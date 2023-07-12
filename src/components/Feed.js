import { Box, Typography } from '@mui/material';
import { Post } from './Post';


export const Feed = () => {
  return (
    <Box flex={4}>
      <Typography variant='h6' textAlign={'center'}>Recent posts</Typography>
      <Post name="A" image="https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" date="10 july 2023" title="Shrimp and Chorizo Paella" />
      <Post name="C" image="https://images.pexels.com/photos/17378753/pexels-photo-17378753/free-photo-of-wood-light-dawn-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" date="8 july 2023" title="Beautiful weather" />
      <Post name="S" image="https://images.pexels.com/photos/14448342/pexels-photo-14448342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" date="7 july 2023" title="Green Chairs Near Cherry Blossom Tree" />
      <Post name="H" image="https://images.pexels.com/photos/4191614/pexels-photo-4191614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" date="1 july 2023" title="Aerial View of City Buildings" />
      <Post name="V" image="https://images.pexels.com/photos/16750660/pexels-photo-16750660/free-photo-of-sea-beach-vacation-sand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" date="1 june 2023" title="La Altagracia Province, Dominican Republic" />
      <Post name="N" image="https://images.pexels.com/photos/539694/pexels-photo-539694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" date="2 june 2023" title="Pink Water Lily Flower on Water" />
    </Box>
  )
}
 