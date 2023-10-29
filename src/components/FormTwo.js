import { TextField, Grid, Typography, Button } from "@mui/material";
function FormTwo() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid spacing={1} item container xs={12}>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h8"> Customer Id</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h8"> Debit Amount Form</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid spacing={1} item container xs={12}>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h8"> Customer Segment</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h8">Debit Amount To</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid spacing={1} item container xs={12}>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h8">Credit Amount Number</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h8"> Credit Amount Form </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid spacing={1} item container xs={12}>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h8"> Debit Currency</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h8"> Credit Amount To</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid spacing={1} item container xs={12}>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h8">Credit Currency</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h8"> Completed By</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid spacing={1} item container xs={12}>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h8">Submitted By</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h8">Charge Type</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default FormTwo;
