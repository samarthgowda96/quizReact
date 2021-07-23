import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"lg",
    height:"4em"
  },
  typo: {
    alignItems:'center',
    textAlign:'center',
    align:'center',
    marginLeft:"50px",
    marginTop:'0.5em',
    fontSize:"3em"
  },
}));

function Home() {
  const [name,setName]= useState('')
  const [data, setData]=useState('')
  const classes = useStyles();
  const handleSubmit=async(e)=>{
      e.preventDefault()

      const newUser={
          name:name
      }
      const res= await axios.post("http://localhost:3001/user",newUser)
      setData(res.data)
      console.log(res.data)
  }

  return (
    <div >
      <AppBar position="static" className={classes.root}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            
          </IconButton>
          <Typography inline variant="h6" color="inherit" className={classes.typo}>
            QuizBot
          </Typography>
        </Toolbar>
      </AppBar>
      <Container  >
      
        <Typography component="div" style={{ backgroundColor: 'white', height: '20vh', boxShadow:"3px 3px 5px 3px" ,marginTop:"10em"}} >
        <TextField
          id="standard-full-width"
          label="Name"
          style={{ margin: 5, marginTop:"2em", fontSize:"10px", fontFamily:"sans-serif"}}
          placeholder="Enter your name to begin your quiz..."
          helperText="required"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>{setName(e.target.value)}}

        />
        <Button variant="contained" color="primary" disableElevation onClick={handleSubmit}>
          Begin
        </Button>
        </Typography>
    </Container>

    </div>
  );
}

export default Home;