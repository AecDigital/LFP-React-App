import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import { getUser, removeUser } from '../../redux/actions/getLFPUsers';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(-1),
  },
  paper: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.text.secondary,
    padding: '10px'
  },
  img: {
    height: '400px'
  },
  container: {
    marginTop: '30px',
  },
  flexHeader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  flexForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    marginTop: '30px',
    marginBottom: '30px',
    marginLeft: '15px'
  },
  formLabel: {
    color: '#1A5FA7',
    fontWeight: '900'
  }

}));

export default function UserDetails({ history }) {
  const classes = useStyles();
  const selectedUser = JSON.stringify(history.location.selectedUser)
  let lfpUser = {
    first_name: '',
    last_name: '',
    email: ''
  }
  lfpUser = useSelector(state => state.lfpUser.data);
  const formUser = {...lfpUser};
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(true);
  const [inputs, setInputs] = useState({
    first_name: '',
    last_name: '',
    email: ''
  });

  const handleBackNavigation = (event) => {
    history.push({ pathname: `/users` });
  }

  const handleLogOut = (event) => {
    localStorage.removeItem('userToken');
    history.push({ pathname: '/login' });
  }

  const handleDeleteUser = (event) => {
    dispatch(removeUser(lfpUser.id))
    history.push({ pathname: `/users` });
  }

  const handleEditUser = (event) => {
    setIsDisabled(!isDisabled)
    formUser.last_name = '';
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
    console.log(inputs)
  }

  useEffect(() => {
    if (!lfpUser.email) {
      dispatch(getUser(selectedUser));
    }
  });

  return (
    <div>
      <Container className={classes.container}>
        <div className={classes.root}>

          <Grid container spacing={3}>
            <Grid item xs={12} className={classes.flexHeader}>
              <h2 align="left"><IconButton aria-label="backNavigation" onClick={handleBackNavigation}><ArrowBackIosIcon /></IconButton></h2>
              <div onClick={handleLogOut} className={"logout"}>
                <Fab size="small" align="right" aria-label="add">
                  <PowerSettingsNewIcon />
                </Fab>
              </div >
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}><img alt="User Avatar" className={classes.img} src={lfpUser.avatar} /></Paper>
            </Grid>

            <Grid className={classes.flexForm} item xs={12} sm={6}>

            <FormControl className={classes.formControl}>
            <Typography className={classes.formLabel}> First Name </Typography>
              <InputLabel htmlFor="my-input"></InputLabel>
              <Input disabled={isDisabled} type="text" name="first_name" id="firstName" onChange={handleChange} value={formUser.first_name || ''} aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl}>
            <Typography className={classes.formLabel}> Last Name </Typography>
              <InputLabel htmlFor="my-input"></InputLabel>
              <Input disabled={isDisabled} name="last_name" id="lastName" value={formUser.last_name || ''} aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl}>
            <Typography className={classes.formLabel}> Email </Typography>
              <InputLabel htmlFor="my-input"></InputLabel>
              <Input disabled={isDisabled} name="email" id="eMail" value={formUser.email || ''} aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>

            </Grid>

            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<EditIcon />}
                  onClick={handleEditUser}
                >
                  Edit
            </Button>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={handleDeleteUser}
                >
                  Delete
              </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
             
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
};


