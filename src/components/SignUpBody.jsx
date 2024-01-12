import React from 'react'
import SignUp from './SignUp.jsx'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';

export default function HomeBody() {
    return (

            <Box component="main" sx={{ flexGrow: 1, position: 'relative' }} >
                <Toolbar />
                <img
                    alt="background_image"
                    src="/Background_img.png"
                    style={{
                        width: '100%',
                        height: '95vh',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: -1, // Set a value lower than the z-index of the navigation bar
                    }}
                />
                <Grid container
                >
                    <Grid item xs={12} md={6}>
                        <Box className='title' sx={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'
                        }}>
                            <Typography variant="h6" sx={{ mt: 5, fontFamily: 'inika' }}>
                                WELCOME TO EXT TRANSPORT
                            </Typography>
                            <Typography variant="h2" sx={{ mt: 2, py: 5, mb: 5, fontFamily: 'inika', letterSpacing: '2px', lineHeight: '1.5', }}>
                                BEST SERVICES FOR <br />ALL CUSTOMER
                            </Typography>
                            <Button variant="contained" sx={{ fontSize: '18px', fontFamily: 'inika' }} className='explore_button'>
                                EXPLORE NOW
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>

                        <SignUp />

                    </Grid>
                    
                </Grid>
            </Box>
    )
}
