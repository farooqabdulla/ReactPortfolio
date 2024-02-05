import styled from '@emotion/styled'
import React from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'
const Contact = () => {
    const Wrapper = styled.section``
    return (
        <Stack sx={{ width: '100%', height: {xs:'125vh',xl:'100vh'}, p: {xl:'10vh 10vw'} }}>
            <Wrapper>
                <Typography variant='h3' sx={{ color: '#03AAE0', mb: '5vh' }}>Contact me</Typography>
                <Stack sx={{flexDirection:{xs:'column-reverse',xl:'row'}}}>
                    <Stack sx={{ width: {xs:'100%',xl:'50%' }}}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9729272097115!2d77.60083008882478!3d12.90946154097143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15085acf3a43%3A0x786f156e16425679!2sSVLNS2%20PG%20for%20Gents!5e0!3m2!1sen!2sin!4v1707038237176!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Stack>
                    <Stack sx={{width:{xs:'100%',xl:'50%'},p:'0 5vw'}}>
                        <form action="https://formspree.io/f/mdoqezap" method='POST'>
                            <Stack spacing={4}>
                                <TextField name='Name' sx={{bgcolor:'white',borderRadius:'5px'}} placeholder='Name' autoComplete='off' required/>
                                <TextField name='Email' sx={{bgcolor:'white',borderRadius:'5px'}} placeholder='Email' type='email' autoComplete='off' required/>
                                <textarea  placeholder='message' name='message' col='30'  rows='6' autoComplete='off' required></textarea>
                                <Button sx={{height:'7vh'}} type='submit' variant='contained'>Submit</Button>
                            </Stack>

                        </form>
                    </Stack>
                </Stack>
            </Wrapper>
        </Stack>
    )
}

export default Contact