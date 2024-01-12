import React from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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

export default function SignIn() {
  return (
    <Grid container spacing={2}>
                            <Grid item md={2}>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box sx={style}>
                                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                                        <hr />
                                        <Typography variant='h5' sx={{alignItems: 'center', fontFamily: 'inika',fontSize:{ xs: '22px', md: '32px' }, fontWeight: '700',textAlign:'center', mb: 3}}>
                                            SIGN IN
                                        </Typography>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            Username
                                        </InputLabel>
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label=""
                                            multiline
                                            maxRows={4}
                                            sx={{mb: 5}}
                                        />
                                       <InputLabel shrink htmlFor="bootstrap-input">
                                            Password
                                        </InputLabel>
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label=""
                                            multiline
                                            maxRows={4}
                                            sx={{}}
                                        />
                                        <FormControlLabel control={<Checkbox />} label="Remember" />
                                        <Button variant='contained' sx={{ fontSize: '14px', fontFamily: 'inika', m: 5}} endIcon={< ArrowForwardIcon/>} className='join_button' >
                                            JOIN 
                                        </Button>
                                    </div>
                                </Box>
                            </Grid>
                        </Grid>
  )
}
