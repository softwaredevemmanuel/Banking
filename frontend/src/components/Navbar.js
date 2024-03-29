import { AppBar, CssBaseline,IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import {AccountCircle } from '@material-ui/icons'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { logout } from '../actions/Auth';
import logo from '../images/bank.png'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      cursor: 'pointer'
    },
}))



const Navbar = ({ auth, logout }) => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const { isAuthenticated } = auth
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleCloseLogout = () => {
        handleClose()
        logout()
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <div className='ward'>
                <Toolbar>
                <img src={logo} className='imag'></img>
    
             <Typography variant="h6" className={classes.title}>
                    XYZ Bank
                </Typography>
                {isAuthenticated && (
                    <div>
                        <span>welcomes</span>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit">
                        
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <Link to='/profile' style={{ textDecoration: 'none', display: 'block', color: '#000' }}>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                        </Link>
                        <Link to='/account' style={{ textDecoration: 'none', display: 'block', color: '#000' }}>
                            <MenuItem onClick={handleClose}>Account</MenuItem>
                        </Link>
                        <MenuItem onClick={handleCloseLogout}>Logout</MenuItem>
                    </Menu>
                    </div>
                )}
                </Toolbar>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)

