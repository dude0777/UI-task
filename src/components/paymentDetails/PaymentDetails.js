import React from 'react'
import { Grid, Typography, Button, TextField } from '@mui/material'
function PaymentDetails() {
    return (
        <div>

            <div className='originator' style={{borderRadius: '5px', border: '2px solid black', padding: '10px', margin: '0 5px 20px 0px' }}>
                <Typography variant='h6'>Payment Details</Typography>
                <Grid container spacing={2}>

                    <Grid item xs={12} container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Typography><span style={{ color: "red" }}>*</span> Debit Currency</Typography>
                            <TextField style={{ backgroundColor: '#a2d5db' }} size='small' fullWidth id="outlined-basic" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography><span style={{ color: "red" }}>*</span>Debit Amount</Typography>
                            <TextField style={{ backgroundColor: '#a2d5db' }} size='small' fullWidth id="outlined-basic" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography><span style={{ color: "red" }}>*</span>Debit Value Date</Typography>
                            <TextField size='small' fullWidth id="outlined-basic" variant="outlined" />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Typography><span style={{ color: "red" }}>*</span>Credit Currency</Typography>
                            <TextField size='small' fullWidth id="outlined-basic" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography><span style={{ color: "red" }}>*</span>Credit Amount</Typography>
                            <TextField size='small' fullWidth id="outlined-basic" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography><span style={{ color: "red" }}>*</span>Default Rate</Typography>
                            <TextField size='small' fullWidth id="outlined-basic" variant="outlined" />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Typography><span style={{ color: "red" }}>*</span> Charge Type</Typography>
                            <TextField style={{ backgroundColor: '#a2d5db' }} size='small' select fullWidth ></TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography><span style={{ color: "red" }}>*</span>Bank Charges</Typography>
                            <TextField style={{ backgroundColor: '#a2d5db' }} size='small' fullWidth id="outlined-basic" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography>Waive off Charges</Typography>
                            <TextField size='small' select fullWidth ></TextField>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Typography><span style={{ color: "red" }}>*</span> Send BIC</Typography>
                            <TextField style={{ backgroundColor: '#a2d5db' }} size='small' fullWidth id="outlined-basic" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography>Nostro BIC</Typography>
                            <TextField style={{ backgroundColor: '#a2d5db' }} size='small' fullWidth id="outlined-basic" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button variant='contained' style={{ marginTop: '25px' }}>SWIFT BIC</Button>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography><span style={{ color: "red" }}>*</span> Account(Nostro/Vostro)</Typography>
                            <TextField style={{ backgroundColor: '#a2d5db' }} size='small' fullWidth id="outlined-basic" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography>Nostro Name</Typography>
                            <TextField style={{ backgroundColor: '#a2d5db' }} size='small' fullWidth id="outlined-basic" variant="outlined" />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} >
                        <Typography><span style={{ color: "red" }}>*</span> Purpose Code</Typography>
                        <TextField size='small' select fullWidth ></TextField>
                    </Grid>

                    <Grid item xs={12} container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Typography> Ordering Institution</Typography>
                            <TextField size='small' fullWidth id="outlined-basic" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography>FinCopy</Typography>
                            <TextField size='small' select fullWidth ></TextField>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} >
                        <Typography>Remitance Information</Typography>
                        <TextField size='small' fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>

                </Grid>

            </div>
            <Grid container spacing={2}>

                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Button variant='contained'>UPLOAD DOCS</Button>
                    </Grid>
                    <Grid item xs={12} md={1}>
                        <Button variant='contained'>PRINT</Button>
                    </Grid>
                    <Grid item xs={12} md={4} />
                    <Grid item xs={12} md={2}>
                        <Button variant='contained'>CANCEL</Button>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button variant='contained'>VALIDATE</Button>
                    </Grid>
                </Grid>

                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={12} md={4} />
                    <Grid item xs={12} md={5}>
                        <TextField size='small' select fullWidth ></TextField>
                    </Grid>
                    <Grid item xs={12} md={1}>
                        <Button variant='contained'>PROCEED</Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    )
}

export default PaymentDetails
