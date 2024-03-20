
import React,{useState} from 'react'
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
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




const defaultTheme = createTheme();

export default function Register() {
const [UserInfo, setUserInfo] = useState({})
const [messageShow, setMessageShow] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://jood-organization.onrender.com/users/register`,UserInfo).then((res)=>{
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
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField onChange={(e)=>{
                      setUserInfo({...UserInfo,firstName:e.target.value})
                }}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={(e)=>{
                      setUserInfo({...UserInfo,lastName:e.target.value})
                }}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e)=>{
                      setUserInfo({...UserInfo,email:e.target.value})
                }}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={(e)=>{
                      setUserInfo({...UserInfo,password:e.target.value})
                }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                onChange={(e)=>{
                      setUserInfo({...UserInfo,country:e.target.value})
                }}
                required
                  fullWidth
                  name="country"
                  label="country"
                  type="country"
                  id="country"
                  autoComplete="country"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={(e)=>{
                      setUserInfo({...UserInfo,age:e.target.value})
                }}
                required
                  fullWidth
                  name="age"
                  label="age"
                  type="age"
                  id="age"
                  autoComplete="age"
                />
              </Grid>
              {/* ------- */}
<Grid item xs={12}>
                  <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">You are </FormLabel>
      <RadioGroup
      onChange={(e)=>{
        setUserInfo({...UserInfo,role:e.target.value})
      }}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="659e5371d2f8fba730f39709" control={<Radio />} label="Donor" />
        <FormControlLabel value="659e5291d2f8fba730f39707" control={<Radio />} label="Employee" />
        <FormControlLabel value="659e53ebd2f8fba730f3970b" control={<Radio />} label="Volunteer" />
        
      </RadioGroup>
    </FormControl>
    </Grid>
              {/* --------- */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up 
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}