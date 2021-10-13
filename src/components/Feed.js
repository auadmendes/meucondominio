import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from './PostCard';

import imagem from '../'
const jaqueProfile = 'https://firebasestorage.googleapis.com/v0/b/meuapp-992a1.appspot.com/o/2021-09-12T21%3A28%3A52.086Z?alt=media&token=365fdf06-8140-4b16-9175-42d8b081958f';
const lucianoProfile = 'https://firebasestorage.googleapis.com/v0/b/meuapp-992a1.appspot.com/o/2021-09-12T23%3A31%3A54.609Z?alt=media&token=64bd0fa2-0b1e-4fe7-8741-410a0d0fd2d9';

const useStyles = makeStyles((theme) => ({
    root: {
      
    },

}));

//exemplos de post
const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Luciano Mendes',
            username: 'luciano.horta',
            avatar: lucianoProfile,
        },
        title: 'Feira livre neste sábado',
        date: 'April 7, 2023',
        description: 'Compre ou venda, traga sua barraquinha e movimente nosso ecosistema!',
        hashtags: '#feira, #tomates, #bazar',
        image: '../assets/posts/foto1.jpg'
    },
    {
        id: 2,
        author: {
            id: 2,
            name: 'Jaquelaine Bueno',
            username: 'jaque.bueno',
            avatar: jaqueProfile,
        },
        title: 'Alugo meu AP',
        date: 'April 5, 2023',
        description: 'Alugo meu apartamento mobiliado. Sol da manhã e condomínio incluso.',
        hashtags: '#aluguel, #soldamanha, #mobiliado',
        image: '../../assets/posts/apartment.jpg'
    },
]

export function Feed() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post}/>
                ))
            }
        </div>
    )
}