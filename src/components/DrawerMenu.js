import React from 'react';
import { Drawer } from '@mui/material';
import { MenuList } from './MenuList';

export const DrawerMenu = ({mode, setMode, openDrawer, setOpenDrawer}) => {

  return (
    <React.Fragment>
        <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
            <MenuList mode={mode} setMode={setMode}/>
        </Drawer>
    </React.Fragment>
  )
}
