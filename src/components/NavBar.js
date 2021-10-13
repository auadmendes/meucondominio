import React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import { ListItem } from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: 275,
    },
    button: {
        width: '100%',
    }
}));

const tags = [
    { id: 1, name: 'Eventos' },
    { id: 2, name: 'Profissionais' },
    { id: 3, name: 'Alugueis' },
    { id: 4, name: 'Pedidos' },
    { id: 5, name: 'Psicina' },
    { id: 6, name: 'Churrascaria' },
]

export function NavBar() {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Button className={classes.button} variant="outlined" color="secondary">Registrar</Button>
            <ListSubheader component="div" id="nested-list-subheader">
                {'Tags em alta'}
            </ListSubheader>
            {tags.map((item) => (
                <ListItem dense button key={`item-${item.id}-${item.name}`}>
                    <ListItemText primary={`#${item.name}`} />
                </ListItem>
            ))}
            <ListItem button>
                Exibir mais tags
            </ListItem>
        </Paper>
    )
}