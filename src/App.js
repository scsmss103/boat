import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Drawer, Button, Box, Stack, IconButton, Menu, MenuItem } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Home, Test } from './home.js'


function App() {

  const [drawerOpen, setDrawerOpen] = useState(false)

  function DrawerButton(props) {
    return (
      <>
        <Button variant='text' component={Link} onClick={() => setDrawerOpen(false)} {...props} />
      </>
    )
  }

  return (
    <>
      <Router>
        <IconButton onClick={() => setDrawerOpen(true)} style={{ position: 'fixed', top: '0', left: '0' }} >
          <MenuRoundedIcon style={{ backgroundColor: 'lightgrey' }} fontSize='large' />
        </IconButton>
        <Drawer anchor='left' open={drawerOpen} onClose={() => setDrawerOpen(false)} PaperProps={{ sx: { width: { md: '25%', xs: '50%' } } }} >
          <DrawerButton to='/' >HOME</DrawerButton>
          <DrawerButton to='/test' >First Page</DrawerButton>
        </Drawer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
