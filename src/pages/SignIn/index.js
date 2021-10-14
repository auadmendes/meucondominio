import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Box, colors } from '@mui/material';

import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#ddd',  
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        height: '100vh',
        width: '70%',
        padding: '0px 15%',

        
    },
    left: {
        backgroundColor: colors.teal[400],
        color: '#fff',
        lineHeight: '0.05px',
        flexBasis: '40%',
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    right: {
        backgroundColor: 'white',
        flexBasis: '60%',

        height: 500,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    button: {
        backgroundColor: '#fff',
    },
    solcial: {

    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {

    },
    title: {

        color: colors.teal[500],
    },
    socialIcon: {

    },
    field: {
        marginBottom: 5,
    }
}));

function SignIn() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.box}>
                <div className={classes.left}>
                    <h2>Vamos criar a sua conta?!</h2>
                    <h6>Crie uma conta para usar os recursos do meu condomínio.</h6>
                    <Button color='third' variant="outlined">SignUp</Button>
                </div>
                <div className={classes.right}>
                    <h2 className={classes.title}>Login</h2>

                    <div className={classes.solcial}>
                        <IconButton className={classes.socialIcon} aria-label="delete">
                            <FacebookRoundedIcon fontSize="large" />
                        </IconButton>
                        <IconButton className={classes.socialIcon} aria-label="delete">
                            <InstagramIcon fontSize="large" />
                        </IconButton>
                        <IconButton className={classes.socialIcon} aria-label="delete">
                            <LinkedInIcon fontSize="large" />
                        </IconButton>
                    </div>
                    <h6>Ou use uma rede social</h6>
                    <div className={classes.form}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '28ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >

                            <div className={classes.field}>
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Login"
                                    //defaultValue="Hello World"
                                    variant="outlined"
                                />
                            </div>
                            <div className={classes.field}>
                                <TextField
                                    id="filled-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                />
                            </div>

                        </Box>
                    </div>
                    <div className={classes.button}>
                        <Button color='primary' variant="outlined">SignIn</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;