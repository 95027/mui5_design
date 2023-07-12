import * as React from 'react';
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { imagesData } from './imageList';


export const Rightbar = () => {
  return (
    <Box flex={2} sx={{display:{xs:"none", sm:"block"}}}>
      <Box position={"fixed"} p={1} >
        <Typography mb={1} variant='h6' fontWeight={100}>Online friends</Typography>
        <AvatarGroup max={8}>
        <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" />
        <Avatar alt="Travis Howard" src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="https://cdn-icons-png.flaticon.com/128/10441/10441736.png" />
        <Avatar alt="Trevor Henderson" src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png" />
        <Avatar alt="Trevor Henderson" src="https://cdn-icons-png.flaticon.com/128/3135/3135789.png" />
        <Avatar alt="Trevor Henderson" src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography mt={2} mb={1} variant='h6' fontWeight={100}>Latest photos</Typography>
        <ImageList cols={3}>
          {
            imagesData.map((image)=>(
              <ImageListItem key={image.title}>
                <img src={`${image.img}`} alt={`${image.title}`}  />

              </ImageListItem>
            ))
          }
        </ImageList>
        <Typography mt={2} variant='h6' fontWeight={100}>Latest conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}
