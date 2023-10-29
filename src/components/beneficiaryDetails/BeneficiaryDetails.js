import React from 'react'
import { TextField, Grid, Typography, Button } from '@mui/material'
function BeneficiaryDetails() {
    return (
        <div className='originator' style={{borderRadius: '5px', border: '2px solid black', padding: '5px', margin: ' 0 0 10px 5px ' }}>
            <Typography variant='h6'>BeneficiaryDetails</Typography>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography><span style={{ color: "red" }}>*</span>IBAN Number</Typography>
                    <TextField size='small' fullWidth id="outlined-basic" variant="outlined" />
                </Grid>

                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Typography><span style={{ color: "red" }}>*</span>Name </Typography>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <TextField size='small' fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>

                    <Grid item xs={12} container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Typography><span style={{ color: "red" }}>*</span>Address Lines</Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField size='small' fullWidth id="outlined-basic" variant="outlined" />
                            <TextField size='small' fullWidth id="outlined-basic" variant="outlined" />
                            <TextField size='small' fullWidth id="outlined-basic" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={12} md={7}>
                        <Typography><span style={{ color: "red" }}>*</span>Selected Account Number</Typography>
                        <TextField size='small' fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={1} />
                    <Grid item xs={12} md={4}>
                        <Button variant='contained' style={{ marginTop: '25px' }}>VIEW ACCOUNT</Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default BeneficiaryDetails
