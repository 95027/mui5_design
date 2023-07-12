import { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, styled, InputBase, Badge, Avatar, Menu, MenuItem} from '@mui/material';
import { Diamond, Mail, Notifications } from '@mui/icons-material';
import { DrawerMenu } from './DrawerMenu';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
});

const Search = styled("div")(({theme})=>({
backgroundColor:"white",
padding: "0 10px",
borderRadius: theme.shape.borderRadius,
width: "40%",
}));

const Icons = styled(Box)(({theme})=>({
display: "none",
gap: "20px",
alignItems: "center",
[theme.breakpoints.up("sm")]:{
  display:"flex",
}
}));

const UserBox = styled(Box)(({theme})=>({
display: "flex",
gap: "10px",
alignItems: "center",
[theme.breakpoints.up("sm")]:{
  display:"none",
}
}));

export const Navbar = ({mode, setMode}) => {

  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);


  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none", md:"block"}}}>
          Mui5 Design
        </Typography>
        <Diamond onClick={()=>setOpenDrawer(!openDrawer)} sx={{display:{xs:"block", md:"none"}, cursor:"pointer" }}/>
        <Search><InputBase sx={mode==="dark" && {color: "gray"}} placeholder='Search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={5} color="error">
            <Notifications />
          </Badge>
          <Avatar alt="Sai" src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" sx={{width:30, height:30, cursor:"pointer"}} onClick={e=>setOpen(true)} />
        </Icons>
        <UserBox onClick={e=>setOpen(true)} sx={{cursor:"pointer"}}>
          <Avatar alt="Sai" src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" sx={{width:30, height:30}} />
          <Typography variant='span'>Sai</Typography>
        </UserBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={e=>setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}>
            
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

      <DrawerMenu mode={mode} setMode={setMode} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      </StyledToolbar>
    </AppBar>
  )
}
