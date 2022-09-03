import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Image from '../images/ccake.png'

const MainSection = () => {
    return (
        //  sx={{textAlignLast:'center'}}
        <Grid container direction='row' alignItems='center' height='70vh' mt='4rem'>
            <Grid item xs={12} sm={6} padding='1.5rem' order={{ xs: 2, sm: 1 }}>
                <Typography variant='h3' color='inherit'>
                    A Shop for Rock
                </Typography>
                <Typography variant='h5' color='inherit'>
                    Come and taste the tasty sweets and cakes
                </Typography>
                <Button size='medium' variant='contained' sx={{ borderRadius: 2 }}>
                    Call Us
                </Button>
            </Grid>
            <Grid container item xs={12} sm={6} justifyContent='center' padding='1.5rem' order={{ xs: 1, sm: 2 }}>
                <Box component='img' src={Image} />
            </Grid>
        </Grid>
    )
}

export default MainSection
