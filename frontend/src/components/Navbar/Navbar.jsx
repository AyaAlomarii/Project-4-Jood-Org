import * as React from 'react';
import { useContext,useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route, useNavigate } from "react-router-dom";
import { tokenContext } from "../../App";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
const pages = ['Products', 'Pricing', 'Blog'];

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
function Navbar() {


  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null)
  const {   setToken,
    isLoggedIn,
    setIsLoggedIn, edit} = useContext(tokenContext);
    const handleOpenNavMenu = (e) => {
      setAnchorElNav(e.currentTarget);
      console.log('first', e.currentTarget)
    };
  
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Link href="/main">
        <Button size="medium"><img style={{width:"60px",height:"60px"}}
        src="https://i.imgur.com/34F1rTZ.png" alt="" /></Button></Link>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          
        </Typography>
        <IconButton sx={{ 
          margin:2,}}>
          <SearchIcon />

        </IconButton>
       
      
        <Link href="/dashboard">
        <Button   sx={{ 
          margin:2,
          flex: 1 }} variant="" size="medium">
          initiatives
        </Button></Link>
        {isLoggedIn?<>
          
         </>:<> 
        <Link href="/register">
        <Button  variant="" size="medium">
          Sign up
        </Button></Link>
        <Link href="/login">
        <Button   sx={{ 
          margin:2,
          flex: 1 }} variant="" size="medium">
          Sign In
        </Button></Link></>}
        {isLoggedIn?<>
        
          <div>
    
        <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
              <MenuIcon />
            </IconButton>
      
      <Menu 
        id="basic-menu"
        sx={{
          zIndex:"2"

        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         <Link href={`/profile`}>
                <MenuItem  onClick={handleCloseNavMenu}  >
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                </Link>
                <Link href="/main">
                <MenuItem  onClick={handleCloseNavMenu}  >
                 <Typography textAlign="center">About Us</Typography>
                </MenuItem>
                </Link>
                <Link href="/dashboard">
                <MenuItem  onClick={()=>{
                  handleCloseNavMenu()
                  
            localStorage.clear()
            
          }} >
                  <Typography textAlign="center">Log out</Typography>
                </MenuItem>
                </Link>

        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
        {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
                
             
            </Menu> */}</>:<></>}
        
      </Toolbar>
     
    </React.Fragment>
  );
}


export default Navbar;