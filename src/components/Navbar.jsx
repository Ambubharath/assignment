import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <Box  sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PRODUCTS
        </Typography>
        <Link to={'/'}><Button class="button" color="inherit">Home</Button></Link>
        <Link to={'/add'}><Button class="button" color="inherit">Add Product</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  <br/>
  <img src="https://img.freepik.com/premium-vector/blue-shopping-cart-logo-vector-template_591497-165.jpg" alt="not available" height="200" width="200"></img>

  </>
  
);

}

export default Navbar