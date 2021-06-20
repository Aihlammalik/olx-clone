import EmailIcon from '@material-ui/icons/Email';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import useSignup from './useSignup';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const [setEmail,setPassword , doSignupUser] =  useSignup();

  
  return (

    <div>
      <button type="button" onClick={handleOpen} style={{ border: "none", backgroundColor: "white" }}>
        <b>SignUp </b>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">SignUp</h2>
            <input type="text" placeholder="enter user name" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="enter password"  onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={doSignupUser()}>login</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
