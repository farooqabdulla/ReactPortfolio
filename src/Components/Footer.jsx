import { Stack, Typography } from '@mui/material'
import React from 'react'


const Footer = () => {
    return (
        <Stack  sx={{ height: '20vh',flexDirection:{xs:'column',xl:'row'},justifyContent:'space-between', width: '100%',p:'2vh 10vw', backgroundImage:'linear-gradient(to right,#220638,#021F4D,#021F4D,#220638)' }}>
            <Stack>
                <Typography variant='h4' sx={{color:'white',fontSize:{xs:'5vw',xl:'2.1vw'}}}>K Farooq Abdulla</Typography>
            </Stack>
            <Stack>
                <Typography variant='h5' sx={{color:'white',fontSize:{xs:'4.5vw',xl:'1.5vw'}}}>Let's Talk?</Typography>
                <Typography variant='body2' sx={{color:'white',mt:'1.5vh'}}>Phone : +91 84311 87297</Typography>
                <Typography variant='body2' sx={{color:'white'}}>Email : farooqabdulla15@gmail.com</Typography>

            </Stack>
         </Stack>
    )
}

export default Footer