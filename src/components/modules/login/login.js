import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Avatar ,Button} from '@material-ui/core';
import ImageAvatar from '../../../assets/avatar.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Link} from 'react-router-dom';
import Modal from './Signup';
import Modal2 from './ModalLoginFacebook';
import Modal3 from './ModalLoginGoogle';
import Modal4 from './ModalLoginEmail'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:450,
    height:"75vh",
    margin: "20px auto"
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>

          <Paper className={classes.paper} elevation="15">
           
              <Grid align="center">
              <Avatar alt="Remy Sharp" src={ImageAvatar} />
              <h4 style={{paddingTop:'20px'}}>Save all your favorite items in one place</h4>
              <Button variant="outlined" fullWidth style={{marginTop:"30px",height:"50px"}}><Modal /> </Button>
            <Button variant="outlined" fullWidth style={{marginTop:"20px",height:"50px"}}><Modal2/>
             </Button>
              <Button variant="outlined" fullWidth style={{marginTop:"30px",height:"50px"}} ><Modal3 /> </Button>
              <Button variant="outlined" fullWidth style={{marginTop:"30px",height:"50px"}}>< Modal4/></Button>

              </Grid>
               </Paper>
        </Grid>
    
      </Grid>
    </div>
  );
}
