import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Fab from '@material-ui/core/Fab';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import { getUsers } from '../../redux/actions/getLFPUsers'

export default function UsersList({ history }) {
  const useStyles = makeStyles({
    tableHead: {
      fontWeight: '500'
    },
    tableRow: {
      cursor: 'pointer'
    },
    container: {
      marginTop: '50px'
    },
    avatar: {
      display: 'flex',
      justifyContent: 'center'
    },
    logout: {

    }
  });
  const classes = useStyles();

  const dispatch = useDispatch();
  const lfpUsers = useSelector(state => state.lfpUsers.data);

  const handleRowClick = (event) => {
    const selectedUser = Number(event.currentTarget.getAttribute('index'))
    history.push({ selectedUser, pathname: `/users/${selectedUser}` });
  }

  const handleLogOut = (event) => {
    localStorage.removeItem('userToken');
    history.push({ pathname: '/login' });
  }

  useEffect(() => {
    if (lfpUsers.length === 0) {
      dispatch(getUsers());
    }
  })
    return (
      <div>
        <div onClick={handleLogOut} className={"logout"}>
          <Fab size="small" align="right" aria-label="add">
            <PowerSettingsNewIcon />
          </Fab>
        </div >


        <Container className={classes.container}>


          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Photo</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {lfpUsers.map((user) => (
                  <TableRow index={user.id} onClick={handleRowClick} className={classes.tableRow} key={user.first_name}>
                    <TableCell align="center" component="th" scope="user">
                      {user.first_name}
                    </TableCell>
                    <TableCell align="center">{user.last_name}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell className={classes.avatar}><Avatar src={user.avatar} /></TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    );
  };
