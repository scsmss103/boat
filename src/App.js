import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Drawer, Button, Box, Stack, IconButton, Menu, MenuItem } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Home } from './home.js'


function App() {

  const [drawerOpen, setDrawerOpen] = useState(false)

  function DrawerButton(props) {
    return (
      <>
        <Button variant='text' component={Link} {...props} />
      </>
    )
  }

  return (
    <>
      <Router>
        <IconButton onClick={() => setDrawerOpen(true)} style={{ backgroundColor: 'lightgrey' }}  >
          <MenuRoundedIcon />
        </IconButton>
        <Drawer anchor='left' open={drawerOpen} onClose={() => setDrawerOpen(false)} >
          <Stack direction='columns' space={0.5} >
            <DrawerButton to='/' >HOME</DrawerButton>
          </Stack>
        </Drawer>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
