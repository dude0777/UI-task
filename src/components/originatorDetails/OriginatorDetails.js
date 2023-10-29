import { Grid, Typography, TextField } from '@mui/material'
function OriginatorDetails() {

  return (


    <div className='originator' style={{borderRadius: '5px', border: '2px solid black', padding: '5px', margin: ' 0 0 10px 5px ' }}>
      <Typography variant='h6'>Originator Details</Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography>Account Number</Typography>
          <TextField style={{ backgroundColor: '#a2d5db' }} size='small' fullWidth id="outlined-basic" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <Typography>Name and Address</Typography>
          <TextField style={{ backgroundColor: '#a2d5db' }} size='small' fullWidth id="outlined-basic" variant="outlined" />
          <TextField style={{ backgroundColor: '#a2d5db' }} size='small' fullWidth id="outlined-basic" variant="outlined" />
          <TextField style={{ backgroundColor: '#a2d5db' }} size='small' fullWidth id="outlined-basic" variant="outlined" />
          <TextField style={{ backgroundColor: '#a2d5db' }} size='small' fullWidth id="outlined-basic" variant="outlined" />
        </Grid>
        <Grid item xs={12} container spacing={10}>
          <Grid item xs={12} md={6} >
            <Typography>National ID</Typography>
            <TextField style={{ backgroundColor: '#a2d5db' }} size='small' fullWidth id="outlined-basic" variant="outlined" />
          </Grid>
          {/* <Grid item xs={12} md={1} /> */}
          <Grid item xs={12} md={6}>
            <Typography>Date of Birth</Typography>
            <TextField style={{ backgroundColor: '#a2d5db' }} size='small' fullWidth id="outlined-basic" variant="outlined" />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography>Issuing Bank Transaction ID</Typography>
          <TextField style={{ backgroundColor: '#a2d5db' }} size='small' fullWidth id="outlined-basic" variant="outlined" />
        </Grid>
      </Grid>
    </div>


  )
}

export default OriginatorDetails
