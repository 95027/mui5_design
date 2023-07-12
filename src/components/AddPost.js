import styled from '@emotion/styled';
import { Add, CalendarMonth, EmojiEmotions, Image, PersonAdd, VideoCall } from '@mui/icons-material';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}) 

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: '10px',
    marginBottom: "20px",
})

export default function AddPost() {

    const [open, setOpen] = useState(false);

  return (
    <>
        <Tooltip onClick={e=>setOpen(true)} title="Add post" sx={{position:"fixed", bottom:20, left:{xs:"50%", md:30} }}>
            <Fab size="medium" color="primary" aria-label="add">
                <Add />
            </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={{width:400, p:3, borderRadius:5 }} bgcolor={"background.default"} color={"text.primary"}>
                <Typography variant='h6' color={'gray'} textAlign={'center'}>Create post</Typography>
                <UserBox>
                    <Avatar alt="Sai" src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" sx={{width:30, height:30}} />
                    <Typography variant='span'>Sai</Typography>
                </UserBox>
                <TextField sx={{width:"100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's on your mind ?"
                    variant="standard" 
                />
                <Stack direction={'row'} gap={1} mt={2} mb={3}> 
                    <EmojiEmotions color='primary'/>
                    <Image color='secondary'/>
                    <VideoCall color='success'/>
                    <PersonAdd color='error'/>
                </Stack>
                <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                    <Button>Post</Button>
                    <Button sx={{width:100}}><CalendarMonth/></Button>
                </ButtonGroup>
            </Box>
        </StyledModal>
    </>
  )
}
