import { Button, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import image1 from '../Images/MyPic3.png'
import resume from '../Images/resume.pdf'

const Hero = () => {
    return (
        <Stack  sx={{ height: {xs:'50vh',xl:'89vh'}, width: '100%',flexDirection:{sx:'column',xl:'row'} }}>
            <Stack spacing={2} sx={{ width: {xs:'100%',xl:'50%'}, height: {xs:'100%',xl:'100%'}, p: {xs:'14vh 0 0 11vw',xl:'20vh 0vw 0 9vw'} }}>
                <Typography variant='h4' sx={{ color: 'white',fontSize:{xs:'5vw',xl:'2.5vw'} }}>Hi!</Typography>
                <Stack direction='row' spacing={2}>
                    <Typography variant='h2' sx={{ color: 'white',fontSize:{xs:'7vw',xl:'4vw'} }}>I'am </Typography>
                    <Typography variant='h2' sx={{ color: '#03AAE0',fontSize:{xs:'7vw',xl:'4vw'} }}>K Farooq Abdulla,</Typography>
                </Stack>
                <Typography variant='h3' sx={{ color: 'white',fontSize:{xs:'5vw',xl:'3.5vw'} }}>Web Developer</Typography>

                <Button variant='contained' component={Link} href={resume} download={resume} sx={{
                    color: 'white',
                    bgcolor: '#FE1A5F',
                    width: {xs:'55vw',xl:'12vw'},
                    height: {xs:'6vh',xl:'6vh'},
                    borderRadius: '20px',
                    ":hover": { bgcolor: '#050836', color: '#03AAE0' }
                }}>Download CV <FileDownloadOutlinedIcon /></Button>
                
            </Stack>


            <Stack sx={{ width: '50%',overflowY:'hidden',display:{xs:'none',xl:'block'}, height: {xs:'0%',xl:'100%'}, p: {xs:'0',xl:'15vh 3vw'} }}>
                <img src={image1} height='' width='650vw' />
            </Stack>
        </Stack>
    )
}

export default Hero