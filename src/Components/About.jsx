import { Button, Card, CardMedia, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import mypic from '../Images/farooq.jpg'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import image2 from '../Images/mern.png'
import express from '../Images/express.png'
import node from '../Images/node.png'
import mongo from '../Images/mongodb.png'
import resume from '../Images/resume.pdf'
const About = () => {
    return (
        <div>
            <Stack sx={{ height: {xs:'160vh',xl:'100vh'}, width: '100%',flexDirection:{xs:'column',xl:'row'} }}>
                <Stack sx={{ height: '100%', width: {xs:'90%',xl:'50%'}, p: {xs:'2vh 0 0 4vh',xl:'7vh 0 0 15vw'} }}>
                    <Card sx={{borderRadius:'10px',height:{xs:'70vh',xl:'75vh'},width:{xs:'100vw',xl:'25vw'}}}>
                        <CardMedia sx={{height:'100%',width:'100%',backgroundSize:'cover',backgroundPosition:'center'}} image={mypic}/>
                    </Card>
                </Stack>
                <Stack sx={{ height: '100%', width: {xs:'100%',xl:'50%'},p:{xs:'2vh 5vw 0 5vw',xl:'25vh 12vw 0 0'} }}>
                    <Typography variant='h3' sx={{ color: '#03AAE0',mb:'1vh',fontSize:{xs:'9vw',xl:'3vw'} }}> - About me</Typography>
                    <Typography variant='body2' sx={{color:'#D6D6D6',mb:'2vh'}}>Hello, This is K Farooq Abdulla I have a background in full-stack web development and am skilled at building
                        dynamic, responsive apps as a new MERN Stack Developer. I am well-suited to offer creative solutions and work well
                        with others in fast-paced development settings.</Typography>
                        <hr />
                    <Stack   sx={{mt:'3vh',mb:'2vh',flexDirection:{xs:'column',xl:'row'},width:'100%',justifyContent:'space-between'}} >
                        <Typography sx={{color:'white',fontSize:{xs:'5vw',xl:'1.1vw'}}}>Name: K Farooq Abdulla</Typography>
                        <Typography sx={{color:'white',fontSize:{xs:'5vw',xl:'1.1vw'}}}>Email: farooqabdulla15@gmail.com</Typography>
                    </Stack>
                    <Stack  sx={{mt:'1vh',flexDirection:{xs:'column',xl:'row'},width:'100%',justifyContent:'space-between'}} >
                        <Typography  sx={{color:'white',fontSize:{xs:'5vw',xl:'1.1vw'}}}>Address: Bengalore, Karnataka</Typography>
                        <Typography sx={{color:'white',fontSize:{xs:'5vw',xl:'1.1vw'}}}>Phone No: +91 84311 87297</Typography>
                    </Stack>
                    <Stack direction='row' spacing={3} alignItems='center' sx={{mt:'3vh'}}>
                    <Button variant='contained' component={Link} href={resume} download={resume} sx={{
                        color: 'white',
                        bgcolor: '#FE1A5F',
                        width: {xs:'55vw',xl:'12vw'},
                    height: {xs:'6vh',xl:'6vh'},
                        borderRadius: '20px',
                        ":hover": { bgcolor: '#050836',color:'#03AAE0' }
                    }}>Download CV <FileDownloadOutlinedIcon /></Button>
                    <Typography variant='h5' sx={{color:'#03AAE0'}}>|</Typography>
                    <Stack component={Link} href='https://github.com/farooqabdulla' target="_blank" sx={{fontSize:{xs:'9vw',xl:'2vw'},color:'#03AAE0'}}><i class="fa-brands fa-github"></i></Stack>
                    <Stack component={Link} href='https://www.linkedin.com/in/k-farooq-abdulla/' target="_blank" sx={{fontSize:{xs:'9vw',xl:'2vw'},color:'#03AAE0'}}><i class="fa-brands fa-linkedin"></i></Stack>
                </Stack>
                <Stack direction='row' spacing={2} sx={{mt:{xs:'6vh',xl:'2vh'}}}>
                    <Typography variant='h6' sx={{color:'white'}}>Tech Stack</Typography>
                    <Typography variant='h6' sx={{color:'white'}}>|</Typography>
                    <img src={image2} height='30vh' alt="" />
                    <img src={mongo} height='30vh' alt="" />
                    <img src={node} height='30vh' alt="" />
                    <img src={express} height='30vh' alt="" />
                </Stack>

                </Stack>
            </Stack>
        </div>
    )
}

export default About