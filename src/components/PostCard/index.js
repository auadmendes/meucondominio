import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import { makeStyles } from '@material-ui/core/styles';

import img from '../../assets/avatar/eu.jpg';
import foto1 from '../../assets/posts/foto1.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        width: 'auto',
    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
        
    },
    caption: {
        paddingRight: theme.spacing(1),
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 24px',
    }
}));

function PostCard({ post }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar alt={post.author.name} src={post.author.avatar} />}
                title={<Typography variant='h6'>{post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                        <Typography  variant='caption' className={classes.caption}>
                            {'Avaliado por'}
                        </Typography>
                        <Typography variant='subtitle2' className={classes.caption} >
                            {post.author.name}
                        </Typography>
                        <Typography  variant='caption' className={classes.caption}>
                            {'| ' + post.date}
                        </Typography>
                    </div>

                }
            >
            </CardHeader>
            <CardContent>
                <Typography
                className={classes.message}
                variant='body1'
                >
                    {post.hashtags}
                </Typography>
                <CardActionArea>
                    <img src={foto1} width='600' height='300' />
                </CardActionArea>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    )
}

export default PostCard;