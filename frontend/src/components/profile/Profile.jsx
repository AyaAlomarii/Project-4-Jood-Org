import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useEffect,useState,useContext } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { tokenContext } from '../../App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




const defaultTheme = createTheme();

export default function Profile() {
  const navigate =useNavigate()

    const [userinfo, setUserinfo] = useState({})
    const [allDonation, setAllDonation] = useState([])
    const { edit,
        setEdit,token, setToken, setIsLoggedIn, isLoggedIn ,userId, setUserId} =
        useContext(tokenContext);
    const HandelRender = () => {
        axios
          .get(`https://jood-organization.onrender.com/donation/${userId}/user`,{
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            
            setAllDonation(res.data.donation)
            setUserinfo( res.data.token)
            console.log("res", res.data);
            console.log("res", res.data.token);

          
            
          
          })
          .catch((err) => {
           
            console.log("err", err);
          });
      };
    
      
    console.log('first', localStorage.getItem("token"))
       useEffect(() => {
HandelRender()
      }, []); 






  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
     
      <main >
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
         
        <Paper sx={{p:2}} elevation={0}>
       
        <Card sx={{p:2, display: 'flex' }}>
            {/* style={{height:"30% ",width:"25%",borderRadius:"50%"}}  src='https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1705445009~exp=1705445609~hmac=bbd49859dfa90a750e4483dc9c7f01157951398ea6d26eb69e798584c3d99749' */}
          <CardMedia
        component="img"
        sx={{height:"25% ",width:"25%",borderRadius:"50%",borderRight:"grey solid",m:"10px"  }}
        image='https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=640&t=st=1705445009~exp=1705445609~hmac=bbd49859dfa90a750e4483dc9c7f01157951398ea6d26eb69e798584c3d99749'
        alt="Live from space album cover"
      />
      <Box sx={{ border:"solid", borderColor: 'divider',width : "100%",display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ p:1,m :"20px",flex: '0 auto' }}>
         
         <Typography variant="h5" sx={{ width : "100%", border:"none ",borderColor: 'divider',m:"3px"}}> <span style={{fontWeight:"bold"}}>Name :  </span>{userinfo.author} { userinfo.last}  </Typography>
         <Typography variant="h5" sx={{m:"3px"}}> <span style={{fontWeight:"bold"}}>Country : </span>{userinfo.country} </Typography>
         <Typography variant="h5" sx={{m:"3px"}}> <span style={{fontWeight:"bold"}}>Age : </span>{userinfo.age} </Typography>
         <Typography variant="h5"component="h2"sx={{m:"3px"}}> <span style={{fontWeight:"bold"}}>Role : </span>{userinfo.nameRole} </Typography>


        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
         
        
        </Box>


        
      </Box>
      
    </Card>
       
        </Paper>
       
      
           <Paper>
<Box>
<Typography m={1} p={1} variant='h6'fontWeight={"bold"}> Your Donations</Typography>
    {allDonation.length?<> {allDonation.map((don,i)=>{

return(<Paper key={i} sx={{width:"100%", height:"40%"}} elevation={2}>

      <Typography variant='h6' m={1} p={1}/* height={"100px"} */ >
     <span style={{ margin:"10px",padding:"10px",fontWeight:"bold"}}> {don.donor.firstName}</span> <br/>

     <span style={{fontWeight:"bold"}}>Amount : </span> {don.amount} JOD
      </Typography>

</Paper>)

})}
</>: <><Typography textAlign={"center"}>No Donation Yet</Typography></>}
               
</Box>

           </Paper>
          
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button onClick={()=>{
                navigate("/dashboard")
              }}
                variant="contained">Explore Opportunities</Button>
            <Link href="/dashboard"> <Button variant="outlined" onClick={()=>{
                localStorage.clear()
                
              }} >Log Out </Button></Link> 
            </Stack>
          </Container>
        </Box>
        
      </main>
     
    </ThemeProvider>
  );
}

/* <Container sx={{ py: 8 }} maxWidth="md">
          
          <Grid container spacing={4}>
            
              <Grid item xs={12} sm={6} md={4}>
               
              </Grid>
            
          </Grid>
        </Container> */