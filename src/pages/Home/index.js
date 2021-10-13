import React from 'react';

import { Header } from '../../components/Header';
import { NavBar } from '../../components/NavBar';
import { Feed } from '../../components/Feed';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        height: '100vh',
        padding: 24,
    },
    toolbar: {
        minHeight: 64,
    }
})

function Home() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar}></div>
            <div className={classes.main}>
                <Container maxWidth="lg">
                    <Box display="flex">
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>

            </div>
        </div>
    )
}

export default Home;