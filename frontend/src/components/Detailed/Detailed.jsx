import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect,useState,useContext}from 'react'
import { tokenContext } from '../../App';
import { Routes, Route, useParams } from "react-router-dom";
import axios from 'axios';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];






const defaultTheme = createTheme({ typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },});
const Detailed = () => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")

  const { id } = useParams()
  const [details, setDetails] = useState({})
  const [plan, setPlan] = useState([])
  const [schedule, setSchedule] = useState([])
  const [duties, setDuties] = useState([])
  const [vol, setVol] = useState({})
  const [volReq, setVolReq] = useState([])
  const [review, setReview] = useState([])
  const [editClick, setEditClick] = useState(false)
  const [donate, setDonate] = useState(false)
  const [donateAmount, setDonateAmount] = useState("")

const [updatedInfo, setUpdatedInfo] = useState({})
const [message, setMessage] = useState("")
const [messageShow, setMessageShow] = useState(false)
const [newReview, setNewReview] = useState({})
const [donationSent, setDonationSent] = useState(false)

  const HandelRender = () => {
    axios
      .get(`https://jood-organization.onrender.com/initiative/${id}`)
      .then((res) => {
      setDetails(res.data.initiative)
      setPlan(res.data.initiative.plan)
      setDuties(res.data.initiative.plan.listOfDuties)
      setSchedule(res.data.initiative.plan.schedule)
      setVol(res.data.initiative.volunteerRequirements)
      setReview(res.data.initiative.reviewsSent)
      
      setVolReq(res.data.initiative.volunteerRequirements.requirementSkills)
      })
    
      .catch((err) => {
      
        console.log("err", err);
      });
  };

  useEffect(() => {
    HandelRender();
  }, []);
    const {edit} =useContext(tokenContext)
   
  return (
    <ThemeProvider theme={defaultTheme}>
    
    
    <main>
      {/* Hero unit */}
      
        <Container sx={{justifyContent:"center"}}  maxWidth="lg">
        <Grid item sx={{justifyItems:"center"}} >
              <Card 
                sx={{ borderRadius:" 50px",margin:"auto",mt:3, p:5, width:"80%",height: '60%', display: 'flex', flexDirection: 'column' ,alignSelf:"center" }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    borderRadius:" 50px",
                    // 16:9
                    width:"100%",
                    height:"100%",
                    pt: '56.25%',
                  }}
                  image={details.img}
                />
                <CardContent  sx={{ flexGrow: 1 }}>
                  <Typography sx={{ pt:2}} fontWeight="bold" gutterBottom variant="h5" component="h2">
                   {details.name}
                  </Typography>
                  <Typography fontSize= "large" component="h2" sx={{ pt:2 }}>
                  {details.description}
                  </Typography>
                  <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 City:  <span style={{fontWeight:"lighter"}}>{details.city}</span> 
                  </Typography>
                  <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 Duration: <span style={{fontWeight:"lighter"}}>{details.duration}</span>
                  </Typography>
                  <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                  Target Audience: <span style={{fontWeight:"lighter"}}>{plan.targetAudience}</span>
                  </Typography>
                  <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 Start Date: <span style={{fontWeight:"lighter"}}>{plan.startDate}</span>
                  </Typography>
                  <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 End Date: <span style={{fontWeight:"lighter"}}>{plan.endDate}</span>
                  </Typography>
                  <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 Target Amount: <span style={{fontWeight:"lighter"}}>{plan.targetAmount} JOD</span> 
                 </Typography>

                 <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 Current Amount:  <span style={{fontWeight:"lighter"}}>{details.currentAmount} JOD</span> 
                  </Typography>
                  <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                  Volunteer Limit: <span style={{fontWeight:"lighter"}}>{details.volunteerLimit} </span>
                 </Typography>
                 <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 Volunteer Requirements:

                 </Typography>
                 
                 <Typography sx={{ pt:2 }}component="h2" fontSize= "large" fontWeight="" ><span style={{fontWeight:"bold"}}>Age Group:  </span>
                  {vol.ageGroup} <br/>
                
                  
                 </Typography>
                 <Typography component="h2" fontSize= "large"  sx={{ pt:2 }}>
                 <span style={{fontWeight:"bold"}}>Skills: </span>{volReq.map((ele,i)=>{
                  return <div style={{display:"initial"}} key={i}>{ele}</div>
                 })}
                     

                 </Typography>

                  <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 Duties:{/* currentAmount */}
                 </Typography>
                 
                 <Typography  component="h2" fontSize= "large" fontWeight="" >
                 <ul>
                  {duties.map((ele,i)=>{
                    return <li style={{padding:"3px"}} key={i}>{ele}</li>
                  })}
                 </ul>
                 </Typography>
                 

                 <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 schedule:
                 </Typography>
                 <Typography component="h2" fontSize= "large" fontWeight="" >
                 <ul>
                  {schedule.map((ele,i)=>{
                    return <li style={{padding:"3px"}}  key={i}>{ele}</li>
                  })}
                 </ul>
                 </Typography>
                 
                 <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{  
                  pt:2 }}>
                 Reviews:<br/>
                 </Typography>
                 {review.length===0?<><Typography fontSize={"large"} sx={{  
                  pt:2 ,pb:1 }} > Be first to give us your review</Typography>
                 
                  </>:<> <Typography sx={{
                   }} component="h2" fontSize= "large" fontWeight="" ><br/> 
                  
                  

                    {review.map((ele,i)=>{
                     return <div key={i}>
                      <Typography  component="h2" fontSize= "large" fontWeight="bold" sx={{  borderBottom: 1, borderColor: 'divider'
                   }}>
                      {ele.reviewer.firstName} {ele.reviewer.lastName}
                 </Typography>
                       {ele.review}</div>
                   })} 
                  
                  </Typography></>}
                  <TextField  sx={{display:"block"}}
           onChange={(e)=>{

            setNewReview({...newReview,review:e.target.value})
          }}
          id="standard-disabled"
          label="Write Your Review Here"
          
          variant="standard"
        /> 
                  <Button  onClick={()=>{
   
   console.log('new', newReview)

   axios.post(`https://jood-organization.onrender.com/initiative/${id}/review`,newReview,{
     headers: {
       authorization: `Bearer ${localStorage.getItem("token")}`,
     },
   }).then((res)=>{
   setNewReview({...newReview,reviewer:res.data.reviewer})
   
   
   
        
            console.log(res.data.reviewer);
      
   }).catch((err)=>{
       console.log('err', err)
   })
     
   }} size="small" sx={{ mt:3 }}variant="outlined">Add Review</Button>
                </CardContent>
               
              </Card>

            </Grid>
          
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button onClick={()=>{
              setEditClick(false)
              setDonate(true)
          setMessageShow(false)

            }} variant="contained">Donate</Button>
            {/* <Button variant="outlined">Volunteer</Button> */}
            {edit==="659e5291d2f8fba730f39707"?<Button onClick={()=>{
              setEditClick(true)
              setDonate(false)
          setMessageShow(false)

            }} variant="outlined">Edit</Button>:<></>}<br/>

             
          </Stack>
          {editClick?<>
              <Box
      component="div"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      
    >
      
      <Container  align="center" sx={{justifyContent:"center"}}  maxWidth="lg">
        <TextField
          onChange={(e)=>{
            setUpdatedInfo({...updatedInfo,name:e.target.value})
          }}
          id="standard-required"
          label="Name"
         
          variant="standard"
        />
        <TextField
          onChange={(e)=>{
            setUpdatedInfo({...updatedInfo,description:e.target.value})
          }}
          id="standard-disabled"
          label="description"
         
          variant="standard"
        /><br/>
         <TextField
           onChange={(e)=>{
            setUpdatedInfo({...updatedInfo,duration:e.target.value})
          }}
          id="standard-disabled"
          label="duration"
         
          variant="standard"
        />
         <TextField
          onChange={(e)=>{
            setUpdatedInfo({...updatedInfo,city:e.target.value})
          }}
          id="standard-disabled"
          label="city"
        
          variant="standard"
        /><br/>
          <TextField
            onChange={(e)=>{
              setUpdatedInfo({...updatedInfo,currentAmount:e.target.value})
            }}
          id="standard-disabled"
          label="currentAmount"
         
          variant="standard"
        />
          <TextField
           onChange={(e)=>{
            setUpdatedInfo({...updatedInfo,volunteerLimit:e.target.value})
          }}
          id="standard-disabled"
          label="volunteerLimit"
          
          variant="standard"
        /><br/>
       <Button onClick={()=>{
   
   

        axios.put(`https://jood-organization.onrender.com/initiative/${id}`,updatedInfo).then((res)=>{
          setDetails(res.data.initiative)
            console.log('res', res.data.initiative)
        }).catch((err)=>{
            console.log('err', err)

        })
        setEditClick(false)  
        }} sx={{  
                  mt:2 }} variant="contained">Done</Button>
     </Container>
    </Box>
            </>:<></>}
            {donate?<>
              <Box
      component="div"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      
    >
      <Container align="center"  sx={{justifyContent:"center"}}  maxWidth="lg" m="auto">
      <TextField
      
           onChange={(e)=>{
            setDonateAmount({amount:e.target.value})
          }}
          id="standard-disabled"
          label="Amount"
          
          variant="standard"
        /><br/>
       <Button onClick={()=>{
   
   

        axios.post(`https://jood-organization.onrender.com/initiative/${id}/donation`,donateAmount,{
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }).then((res)=>{
          setMessage(res.data.message)
          setMessageShow(true)
            console.log('res', res.data.message)
        }).catch((err)=>{
            console.log('err', err)
        })
          
        }} sx={{  
                  mt:2 }} variant="contained">Done</Button>

{messageShow?<>
         <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">This is a success {message}</Alert>
   
     
    </Stack>
     
      </>:<></>}
      </Container>
    </Box>

            </>:<>
            
            
            </>}
        </Container>
       
      
    </main>

  </ThemeProvider>
  )
}

export default Detailed