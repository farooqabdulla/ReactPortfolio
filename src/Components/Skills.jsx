import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import css1 from '../Images/css.png'
import html1 from '../Images/htmllogo.png'
import js from '../Images/js.png'
import react1 from '../Images/mern.png'
import mongo from '../Images/mongodb.png'
import express from '../Images/express.png'
import node from '../Images/node.png'
import sql from '../Images/sql.png'
const Skills = () => {
    return (
        <Stack sx={{ height: {xs:'200vh',xl:'100vh'}, width: '100%',p:'5vh 10vw' }}>
            <Stack>
                <Typography variant='h5' sx={{ color: '#03AAE0',mb:'2vh',overflowY:'hidden' }}>-Skills</Typography>
                <Typography variant='h3' sx={{ color: 'white',mb:'3vh',fontSize:{xs:'9vw',xl:'3vw'},overflowY:'hidden' }}>-FrontEnd Skills</Typography>
                <Stack  sx={{mb:'3vh',flexDirection:{xs:'column',xl:'row'},overflowY:'hidden',justifyContent:'space-between'}}>
                    <Card sx={{ width: {xs:'30vh',xl:'15vw'},ml:{xs:'9vw'}, height: '25vh',mb:{xs:'2vh'} }}>
                        <CardMedia sx={{ height: '70%', width: '100%', backgroundSize: 'contain' }} image={html1}></CardMedia>
                        <CardContent>
                            <Typography textAlign='center'>HTML</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: {xs:'30vh',xl:'15vw'},ml:{xs:'9vw'}, height: '25vh',mb:{xs:'2vh'} }}>
                        <CardMedia sx={{ height: '70%', width: '100%', backgroundSize: 'contain' }} image={css1}></CardMedia>
                        <CardContent>
                            <Typography textAlign='center'>CSS</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: {xs:'30vh',xl:'15vw'},ml:{xs:'9vw'}, height: '25vh',mb:{xs:'2vh'} }}>
                        <CardMedia sx={{ height: '70%', width: '100%', backgroundSize: 'contain' }} image={js}></CardMedia>
                        <CardContent>
                            <Typography textAlign='center'>JAVA SCRIPT</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: {xs:'30vh',xl:'15vw'},ml:{xs:'9vw'}, height: '25vh',mb:{xs:'2vh'} }}>
                        <CardMedia sx={{ height: '70%', width: '100%', backgroundSize: 'contain' }} image={react1}></CardMedia>
                        <CardContent>
                            <Typography textAlign='center'>REACT</Typography>
                        </CardContent>
                    </Card>

                </Stack>
                <Typography variant='h3' sx={{ color: 'white',mb:'3.2vh',mt:'5vh',overflowY:'hidden',fontSize:{xs:'9vw',xl:'3vw'} }}>-BackEnd Skills</Typography>
                <Stack  sx={{mb:'3vh',overflowY:'hidden',flexDirection:{xs:'column',xl:'row'},justifyContent:'space-between'}}>
                    <Card sx={{ width: {xs:'30vh',xl:'15vw'},ml:{xs:'9vw'}, height: '25vh',mb:{xs:'2vh'} }}>
                        <CardMedia sx={{ height: '70%', width: '100%', backgroundSize: 'contain' }} image={express}></CardMedia>
                        <CardContent>
                            <Typography textAlign='center'>Express JS</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: {xs:'30vh',xl:'15vw'},ml:{xs:'9vw'}, height: '25vh',mb:{xs:'2vh'} }}>
                        <CardMedia sx={{ height: '70%', width: '100%', backgroundSize: 'contain' }} image={node}></CardMedia>
                        <CardContent>
                            <Typography textAlign='center'>Node JS</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: {xs:'30vh',xl:'15vw'},ml:{xs:'9vw'}, height: '25vh',mb:{xs:'2vh'} }}>
                        <CardMedia sx={{ height: '70%', width: '100%', backgroundSize: 'contain' }} image={mongo}></CardMedia>
                        <CardContent>
                            <Typography textAlign='center'>MongoDB</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: {xs:'30vh',xl:'15vw'},ml:{xs:'9vw'}, height: '25vh',mb:{xs:'2vh'} }}>
                        <CardMedia sx={{ height: '70%', width: '100%', backgroundSize: 'contain' }} image={sql}></CardMedia>
                        <CardContent>
                            <Typography textAlign='center'>SQL</Typography>
                        </CardContent>
                    </Card>

                </Stack>
            </Stack>
        </Stack>
    )
}

export default Skills