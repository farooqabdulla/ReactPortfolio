import { Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import school from '../Images/school.png'
import shoping from '../Images/shoping.png'
import todo from '../Images/todo.png'
const Projects = () => {
    return (
        <Stack sx={{ height: {xs:'200vh',xl:'100vh'}, width: '100%',p:'12vh 10vw',overflowY:'hidden' }}>
            <Typography variant='h3' sx={{color:'#03AAE0',overflowY:'hidden',pb:{xs:'10vh'}}}>Projects</Typography>
            <Stack  sx={{mb:'3vh',overflowY:'hidden',flexDirection:{xs:'column',xl:'row'},justifyContent:'space-between'}} >
                <Card sx={{width:{xs:'100vw',xl:'22vw'},height:{xs:'250vh',xl:'52vh'},mb:{xs:'2vh'}}}>
                    <CardMedia image={shoping} sx={{ height: '50%', width: '100%', backgroundSize: 'cover' }}/>
                    <CardContent>
                        <Typography variant='h6'>Shopping App</Typography>
                        <Typography>MongoDB, Express JS, React ,Node JS</Typography>
                        <Button variant='outlined' sx={{mt:'3vh'}}>View in Github</Button>
                    </CardContent>
                </Card>
                <Card sx={{width:{xs:'100vw',xl:'22vw'},height:{xs:'250vh',xl:'52vh'},mb:{xs:'2vh'}}}>
                <CardMedia image={school} sx={{ height: '50%', width: '100%', backgroundSize: 'cover' }}/>
                    <CardContent>
                        <Typography variant='h6'>School Management System</Typography>
                        <Typography>React,axios,Material ui</Typography>
                        <Button variant='outlined' sx={{mt:'3vh'}}>View in Github</Button>
                    </CardContent>
                </Card>
                <Card sx={{width:{xs:'100vw',xl:'22vw'},height:{xs:'250vh',xl:'52vh'},mb:{xs:'2vh'}}}>
                <CardMedia image={todo} sx={{ height: '50%', width: '100%', backgroundSize: 'cover' }}/>
                    <CardContent>
                        <Typography variant='h6'>TO DO LIST</Typography>
                        <Typography>MongoDB, Express JS, React ,Node JS</Typography>
                        <Button variant='outlined' sx={{mt:'3vh'}}>View in Github</Button>
                    </CardContent>
                </Card>
            </Stack>
        </Stack>
    )
}

export default Projects