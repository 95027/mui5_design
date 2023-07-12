import { Box} from '@mui/material';
import {MenuList} from './MenuList';

export const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex={1} sx={{display:{xs:"none", md:"block"}}}> 
      <Box position={"fixed"}>
        <MenuList mode={mode} setMode={setMode} />
      </Box>
    </Box>
  )
}
