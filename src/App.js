import { useState } from 'react';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { Feed } from './components/Feed';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Rightbar } from './components/Rightbar';
import AddPost from './components/AddPost';

function App() {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode:mode,
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar mode={mode} setMode={setMode}/>
        <Stack direction='row' spacing={2}  justifyContent="space-between" mt={2}>
          <Sidebar mode={mode} setMode={setMode} />
          <Feed/>
          <Rightbar/>
        </Stack>
        <AddPost/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
