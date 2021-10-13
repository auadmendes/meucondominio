//import './header.css'
import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { SvgIcon } from '@mui/material';
import { Bell } from 'react-feather';
import Avatar from '@mui/material/Avatar';


const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    logo: {
        maxHeight: 55,
        fontSize: 22,
        fontFamily: 'Roboto',
        fontWeight: 500,
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        marginRight: 10,
    },
    bell: {
        marginRight: 10,
    }
});

export function Header() {
    const classes = useStyles();
    return (

        <AppBar elevation={0} position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <div className={classes.logo}>
                    <span>Condominio React</span>
                </div>
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <div className={classes.button}>
                        <Button color='primary' variant="contained">
                            Postar
                        </Button>
                    </div>
                    <div className={classes.bell}>
                        <SvgIcon>
                            <Bell />
                        </SvgIcon>
                    </div>
                    <div>
                        <Avatar alt="Luciano" src="/" />
                    </div>
                </div>
            </Toolbar>
        </AppBar>

    )
}
