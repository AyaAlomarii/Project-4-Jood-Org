
import React,{useState} from 'react'
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import FolderIcon from '@mui/icons-material/Folder';

   
const defaultTheme = createTheme();

export default function Create() {
    const [image, setImage ] = useState("");
const [ url, setUrl ] = useState("");
    
const [Info, setInfo] = useState({})
const [plan, setPlan] = useState({})
const [volunteerRequirements, setVolunteerRequirements] = useState({})
const [messageShow, setMessageShow] = useState({})
const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "xaqyveks")
    data.append("cloud_name","dsyee942i")
    fetch("https://api.cloudinary.com/v1_1/dsyee942i/image/upload",{
    method:"post",
    body: data
    })	

    .then(resp => resp.json())
    .then(data => {
    setUrl(data.url)
    setInfo({...Info,img:data.url})
    })
    .catch(err => console.log(err))
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://jood-organization.onrender.com/initiative/`,Info,{
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res)=>{
      setMessageShow({
      messageShow: res.data.message,
      status:true
      
    })
    
      console.log('res', res.data.message)
    
    
    }).catch((err)=>{
      setMessageShow({
        messageShow:err.response.data.message,
        status:false
      })
      console.log('err', err)
  
    })
  };

  return (
    <div className="sign-in">
    <ThemeProvider  theme={defaultTheme}>
      <Container   component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            margin: "auto",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#155fa0' }}>
            <FolderIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Create New Initiative
          </Typography>
          {/*  { 
 "img":"https://img.freepik.com/free-vector/teacher-student-concept-illustration_114360-7915.jpg?w=996&t=st=1705096609~exp=1705097209~hmac=bd7d18118299bfac330c53fb75bac1c316fffb99953a24f9e3c5b0f94c5a3a61",
        
    
     
        
        
        
        
      
    "volunteerRequirements" :{
        
        "ageGroup":"20-29",
        "requirementSkills":"college students"
    },
    
    "category":"659e56d483abe2262ed1caff"} */}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField onChange={(e)=>{
                      setInfo({...Info,name:e.target.value})
                }}
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
               
               <TextField 
               onChange={(e)=>{
                setInfo({...Info,description:e.target.value})
          }}
               required
               fullWidth
              
               aria-label="minimum height" minRows={3} label="Description" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e)=>{
                      setInfo({...Info,duration:e.target.value})
                }}
                  required
                  fullWidth
                  id="duration"
                  label="duration"
                  name="duration"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={(e)=>{
                      setInfo({...Info,city:e.target.value})
                }}
                  required
                  fullWidth
                  name="city"
                  label="city"
                  id="city"
                />
              </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                onChange={(e)=>{
                      setInfo({...Info,currentAmount:e.target.value})
                }}
                required
                  fullWidth
                  name="currentAmount"
                  label="currentAmount"
                  type="number"
                  id="currentAmount"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={(e)=>{
                      setInfo({...Info,volunteerLimit:e.target.value})
                }}
                required
                  fullWidth
                  name="volunteerLimit"
                  label="volunteerLimit"
                  type="number"
                  id="volunteerLimit"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField 
               onChange={(e)=>{
                setPlan({...plan,schedule:e.target.value.split(",")})
               
                
          }}
               required
               fullWidth
               
               aria-label="minimum height" minRows={3} placeholder="Schedule ..please enter a comma between each day" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={(e)=>{
                    setPlan({...plan,targetAmount:e.target.value})
                }}
                required
                  fullWidth
                  name="targetAmount"
                  label="targetAmount"
                  type="number"
                  id="targetAmount"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={(e)=>{
                    setPlan({...plan,startDate:e.target.value})
                }}
                required
                  fullWidth
                  name="startDate"
                  label="startDate"
                  id="startDate"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={(e)=>{
                    setPlan({...plan,endDate:e.target.value})
                
                }}
                required
                  fullWidth
                  name="endDate"
                  label="endDate"
                  id="endDate"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField 
               onChange={(e)=>{
                setPlan({...plan,listOfDuties:e.target.value.split(",")})
               
                
          }}
               required
               fullWidth
               
               aria-label="minimum height" minRows={3} placeholder="list Of Duties ..please enter a comma between each duty" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={(e)=>{
                    setPlan({...plan,targetAudience:e.target.value})
                    setInfo({...Info,plan:plan})
                }}
                required
                  fullWidth
                  name="targetAudience"
                  label="targetAudience"
                  id="targetAudience"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={(e)=>{
                    /*    
    " {  "name":"Kn",
 "img":"https://img.freepik.com/free-vector/teacher-student-concept-illustration_114360-7915.jpg?w=996&t=st=1705096609~exp=1705097209~hmac=bd7d18118299bfac330c53fb75bac1c316fffb99953a24f9e3c5b0f94c5a3a61",
       
     "plan" :{
        
        
        "listOfDuties":["Support Education Access: Strive to make education accessible by fostering a positive learning environment and encouraging active participation","Achieve Learning Engagement: Strive to ensure the active participation of at least 70% of children in targeted villages in regular learning sessions, aiming to progressively increase this engagement to 90-100% over time","Document and Assess Progress: Track progress and assess the impact of the sessions to adapt and improve the educational approach continually."],
        
 
    
    "category":"659e56d483abe2262ed1caff"} */
        setVolunteerRequirements({...volunteerRequirements,ageGroup:e.target.value})
                   
                }}

                required
                  fullWidth
                  name="volunteerRequirementsAge"
                  label="Volunteers ageGroup"
                  id="ageGroup"
                />
              </Grid> 
               <Grid item xs={12} sm={6}>
                <TextField
                onChange={(e)=>{
                    setVolunteerRequirements({...volunteerRequirements,requirementSkills:e.target.value})
                     setInfo({...Info,volunteerRequirements:volunteerRequirements})

                }}
                required
                  fullWidth
                  name="requirementSkills"
                  label="requirementSkills"
                  id="requirementSkills"
                />
              </Grid>

             
              <Grid item xs={12} sm={6}>
              <div>
<input  type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
<button onClick={uploadImage}>Upload</button>
</div>
<div>
<h3>Uploaded image will be displayed here</h3>
<img style={{width:"50%",height:"50%"}} src={url}/>
</div>
              </Grid>
            
              {/* ------- */}
                {messageShow.status?<><Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Initiative Created Successfully</Alert>
    
    </Stack></>:<> </>}

             
<Grid item xs={12}>
                  <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">category </FormLabel>
      <RadioGroup
      onChange={(e)=>{
        setInfo({...Info,category:e.target.value})
      }}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="659e56be83abe2262ed1cafd" control={<Radio />} label="Health" />
        <FormControlLabel value="659e56d483abe2262ed1caff" control={<Radio />} label="Educational" />
       
        
      </RadioGroup>
    </FormControl>
    </Grid>
              {/* --------- */}

              <Grid item xs={12}>
               
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
            <Grid container justifyContent="flex-end">
              
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}