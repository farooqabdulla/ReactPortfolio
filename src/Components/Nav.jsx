import { AppBar, Button, Link, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Nav = () => {
  return (
    <AppBar position='static' sx={{boxShadow:'none',bgcolor:'transparent',p:'1vh 7vw'}}>
        <Toolbar sx={{justifyContent:'space-between'}}>
            <Stack>
                <Typography variant='h4' >Portfolio</Typography>
            </Stack>
            <Stack direction='row' sx={{display:{xs:'none',xl:'block'}}}  spacing={3}>
                <Button components={Link} color='inherit'>Home</Button>
                <Button components={Link} color='inherit'>About</Button>
                <Button components={Link} color='inherit'>Skills</Button>
                <Button components={Link} color='inherit'>Projects</Button>
                <Button components={Link} color='inherit'>Contact</Button>
                
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Nav