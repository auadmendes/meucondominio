import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import Comment from '@mui/icons-material/Comment';
import { makeStyles } from '@material-ui/core/styles';

import img from '../../assets/avatar/eu.jpg';
import foto1 from '../../assets/posts/foto1.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        width: '100%',
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
        color: '#a9a9a9'
    },
    image: {
        maxHeight: 450,
        width: '100%',
        maxWidth: '100%',
    },
    content: {
        margin: -15,
    },
    favorite: {
        marginLeft: 'auto',
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
                        <Typography variant='caption' className={classes.caption}>
                            {'Avaliado por'}
                        </Typography>
                        <Typography variant='subtitle2' className={classes.caption} >
                            {post.author.name}
                        </Typography>
                        <Typography variant='caption' className={classes.caption}>
                            {'| ' + post.date}
                        </Typography>
                    </div>

                }
            >
            </CardHeader>
            <CardContent className={classes.content}>
                <Typography
                    className={classes.message}
                    variant='body1'
                >
                    {post.hashtags}
                </Typography>
                <CardActionArea className={classes.content}>
                    <img className={classes.image} src={foto1} />
                </CardActionArea>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    <Typography
                        style={{ cursor: 'pointer' }}
                        color='textSecondary'
                        variant='body2'
                    >
                        {'0'}
                    </Typography>
                </IconButton>
                <IconButton aria-label="share">
                    <Comment />
                    <Typography
                        style={{ cursor: 'pointer' }}
                        color='textSecondary'
                        variant='body2'
                    >
                        {'0'}
                    </Typography>
                </IconButton>
                <IconButton aria-label="share" className={classes.favorite} >
                    <TurnedInIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default PostCard;