import * as React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TextField from '@mui/material/TextField';



import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import InstagramIcon from '@mui/icons-material/Instagram';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EmailIcon from '@mui/icons-material/Email';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { useState, createContext } from "react";
import {
  jsxDEV as _jsxDEV,
  Fragment as _Fragment,
} from "react/jsx-dev-runtime";
import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Register from "./components/Register";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashbored/Dashored";
import Detailed from "./components/Detailed/Detailed";
import ExploreIcon from '@mui/icons-material/Explore';
import InfoIcon from '@mui/icons-material/Info';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Profile from"./components/profile/Profile"
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Container, Grid } from "@mui/material";
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import Create from "./components/CreateIn/CreateIn";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        www.Jood.org.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export const tokenContext = createContext();
function App() {
  

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false
  );
  const [allInitiative, setAllInitiative] = useState([]);
  const [edit, setEdit] = useState(localStorage.getItem("edit") || "")
const [id, setId] = useState(localStorage.getItem("id") || "")

const [userId, setUserId] = useState(localStorage.getItem("userId") || "")
  return (
    <div className="all">
      <tokenContext.Provider 
        value={{edit,
          setEdit,
          token,
          setToken,
          isLoggedIn,
          setIsLoggedIn,
          allInitiative,
          setAllInitiative,
          setId ,
          userId, setUserId
        }}
      >
        <Navbar />
        
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/initiativeDetails/:id"
            element={
              <Detailed />
            }
          />
           <Route
            path="/main"
            element={
              <Main />
            }
          />
           <Route
            path="/profile"
            element={
              <Profile />
            }
          />
           <Route
            path="/createNewInitiative"
            element={
              <Create />
            }
          />
        </Routes>
       
        
{/* Footer */}
<Box sx={{height:"20%", bgcolor: 'background.paper',marginTop:"30px", p: 1, borderTop: 2, borderColor: 'divider'}} component="footer">
  <Container  sx={{display:"grid", height:"10%",gridTemplateColumns:"1fr 1fr 1fr 2fr ",gap:"20px",mb:"5px"}}>
<Box align="center">

    <Box>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Link href="/main">  <HomeIcon color="primary"/> </Link>
        </ListItemAvatar>
        <ListItemText
          primary="Home"
         />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Link href="/dashboard"> <ExploreIcon color="primary"/>
        </Link>  </ListItemAvatar>
        <ListItemText
          primary="Initiative"
         />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
         <Link href="/login"> <AccountCircleIcon color="primary"/></Link>
        </ListItemAvatar>
        <ListItemText
          primary="Sign In"
         />
      </ListItem>
    </List>
    </Box>
        </Box>
        <Box align="center">

    <Box>
    <List  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar >
          <LocalPhoneIcon  color="primary"/>
        </ListItemAvatar>
        <ListItemText sx={{font:"10px"}}
          primary="00962791517993"
         />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <EmailIcon color="primary"/>
        </ListItemAvatar>
        <ListItemText
          primary="JoodOrg@gmail.com"
         />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <AddLocationIcon color="primary"/>
        </ListItemAvatar>
        <ListItemText
          primary="Jordan,Amman,Khalda"
         />
      </ListItem>
    </List>
    </Box>
    
        </Box>
        <Box align="center">

<Box>
<List  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  <ListItem alignItems="flex-start">
    <ListItemAvatar >
      <FacebookIcon  color="primary"/>
    </ListItemAvatar>
    <ListItemText sx={{font:"10px"}}
      primary="Jood Org"
     />
  </ListItem>
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <InstagramIcon color="primary"/>
    </ListItemAvatar>
    <ListItemText
      primary="Jood Org"
     />
  </ListItem>
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <WhatsAppIcon color="primary"/>
    </ListItemAvatar>
    <ListItemText
      primary="0791517993"
     />
  </ListItem>
</List>
</Box>

    </Box>
    <Box align="center">

<Box>
<List  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  <ListItem alignItems="flex-start">
    <ListItemAvatar >
      <QuestionAnswerIcon  color="primary"/>
    </ListItemAvatar>
    <ListItemText
      primary="Subscribe to our Newsletter "
     />
    
  </ListItem>
  <TextField label="Your email address"/>
  <ListItem alignItems="flex-start">
    
    
  </ListItem>
  <ListItem alignItems="flex-start">
    
  </ListItem>
</List>
</Box>

    </Box>
  </Container>
     
      
      
    </Box>
    <Copyright  />
      </tokenContext.Provider>
    </div>
  );
}

export default App;
