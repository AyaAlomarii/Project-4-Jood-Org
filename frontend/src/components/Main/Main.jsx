import * as React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AssessmentIcon from '@mui/icons-material/Assessment';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {styled, createTheme, ThemeProvider } from "@mui/material/styles";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Main() {
  

  return (
    <Container
        
        maxWidth="xlg"
    >
    <Paper
      sx={{
        position: 'relative',
        borderRadius:" 50px",
       
        color: '#fff',
        m: 4,
        filter: "blur(0.5px)",
        WebkitFilter: "blur(px)",
        width:"100wv",
        height:"70vh",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundColor: "rgba(0,0,0, 0.6)",
      }}
    >
    </Paper>
    <Typography
            textAlign="center"
           
            sx={{
                
                backgroundColor: "rgba(0,0,0, 0.7)",
                color: "white",
                fontWeight: "bold",
              //  border: "3px solid #f1f1f1",
                position: "absolute",
                borderRadius:" 40px",

                
                top: "80%",
                left: "50%",
                transform:" translate(-50%, -50%)",
                ZIndex: "3",
                width: "50%",
                padding: "20px",
                textAlign: "center"
            }}


              variant="h5"
              align="center"
              paragraph
            >
                Jood<br/>
                Connect. Empower. Change.
              
            </Typography>
        <Container maxWidth="lg">
           
           
<Box m={3} align="center">
<img style={{width:"22%",height:"20%",margin:"15px"}}
        src="https://i.imgur.com/34F1rTZ.png" alt="" />

</Box>
<Paper  elevation={0}
      sx={{
        position: 'relative',
       
        borderRadius:" 50px",
       alignContent:"center",
        m:1,
        p:1,
       
       
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
      
       
      }}
    >
      
<Box align="center" p={2} m={2} sx={{  border:"#155fa0 solid",borderRadius:"30px", boxShadow:" 1px 12px #155fa0"}} ><Typography variant="h5" align='center'>Jood is a nonprofit organization committed to making a difference through volunteerism, donations, and impactful charity initiatives. Be a part of Jood's mission for positive change.</Typography></Box>
    </Paper>
<Container sx={{ m:2,
  display:"grid",
 gridTemplateColumns:"1fr 1fr 1fr",
 gap:"12px"
 ,mb:7
}} >
<Card sx={{  border:"#155fa0 solid", borderRadius:"30px",m:"auto" ,textAlign:"center" ,height:"100%",boxShadow:"2px 12px #155fa0, -0.5em  .4em   #155fa0"}}  >
<CardContent>
<Typography  align='center'>
<TipsAndUpdatesIcon/><br/>

Our Vision<br/>
Jood envisions a kinder world through volunteerism and charity, creating lasting positive change. Join us in shaping a brighter future.
</Typography>

</CardContent>


</Card>
<Card sx={{  border:"#155fa0 solid", borderRadius:"30px",m:"auto" ,textAlign:"center",mt:"1" ,height:"100%", boxShadow:" 1px 12px #155fa0"}} >
<CardContent>
<Typography align='center'>
<VolunteerActivismIcon/>
<br/>
Get involved<br/>
Get involved with Jood! Volunteer, donate, or join our impactful initiatives. Be a part of positive change today.
  
</Typography>

</CardContent>
</Card>
<Card sx={{ border:"#155fa0 solid", borderRadius:"30px",m:"auto" ,textAlign:"center",mt:"1" ,height:"100%",boxShadow:"12px 12px 1px 1px #155fa0"}}>
<CardContent>
<Typography align='center'>
<AssessmentIcon/><br/>
  Our Mission<br/>
  At Jood, we ignite kindness through volunteerism and impactful charity initiatives, creating a brighter future for all.
  
</Typography>

</CardContent>
</Card>
</Container>
          </Container>
      
    
    </Container>
  );
}



export default Main;