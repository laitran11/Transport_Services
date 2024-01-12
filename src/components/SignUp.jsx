import React from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../pages/Home/Home.css';

const style = {
    mt: 3,
    width: { xs: '280px', md: '320px' },
    mx: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 10,
};

export default function SignUpBody() {
    return (
        <Grid container spacing={2}>
            <Grid item md={2}>
            </Grid>
            <Grid item xs={12} md={8}>
                <Box sx={style}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <hr />
                        <Typography variant='h5' sx={{ alignItems: 'center', fontFamily: 'inika', fontSize: { xs: '22px', md: '32px' }, fontWeight: '700', textAlign: 'center', mb: 3 }}>
                            SIGN IN
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <div>
                                <InputLabel shrink htmlFor="bootstrap-input">
                                    First name
                                </InputLabel>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label=""
                                    multiline
                                    maxRows={4}
                                    sx={{mr:2}}
                                />
                            </div>

                            <div>
                                <InputLabel shrink htmlFor="bootstrap-input">
                                    Last Name
                                </InputLabel>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label=""
                                    multiline
                                    maxRows={4}
                                    sx={{mb:2}}
                                />
                            </div>
                        </Box>
                        <InputLabel shrink htmlFor="bootstrap-input">
                            Username
                        </InputLabel>
                        <TextField
                            id="outlined-multiline-flexible"
                            label=""
                            multiline
                            maxRows={4}
                            sx={{ mb: 2 }}
                        />
                        <InputLabel shrink htmlFor="bootstrap-input">
                            Email
                        </InputLabel>
                        <TextField
                            id="outlined-multiline-flexible"
                            label=""
                            multiline
                            maxRows={4}
                            sx={{ mb: 2 }}
                        />
            
                        <Box display="flex" alignItems="center">
                            <div>
                                <InputLabel shrink htmlFor="bootstrap-input">
                                    Password
                                </InputLabel>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label=""
                                    multiline
                                    maxRows={4}
                                    sx={{mr:2}}
                                />
                            </div>

                            <div>
                                <InputLabel shrink htmlFor="bootstrap-input">
                                    Retype Password
                                </InputLabel>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label=""
                                    multiline
                                    maxRows={4}
                                    
                                />
                            </div>
                        </Box>
                        <Button variant='contained' sx={{ fontSize: '14px', fontFamily: 'inika', m: 5 }} endIcon={< ArrowForwardIcon />} className='join_button' >
                            JOIN
                        </Button>
                    </div>
                </Box>
            </Grid>
        </Grid>
    )
}
