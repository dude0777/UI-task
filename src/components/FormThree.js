import { TextField, Grid, Typography, Button } from "@mui/material";

function FormThree() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid spacing={1} item container xs={12}>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h8">Transaction Reference #:</Typography>
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
              <Typography variant="h8">Orginating Country </Typography>
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
              <Typography variant="h8">External Reference #:</Typography>
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
              <Typography variant="h8">Payment Type</Typography>
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
              <Typography variant="h8">Clean Payment Reference</Typography>
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
              <Typography variant="h8">Transfer Type</Typography>
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
              <Typography variant="h8">Sender BIC</Typography>
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
              <Typography variant="h8">Transaction Status</Typography>
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
              <Typography variant="h8">Session Number</Typography>
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
              <Typography variant="h8">Pending With User</Typography>
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
        <Grid item xs={12} container>
          <Grid item xs={6} justifyContent={"flex-end"}>
            <Grid item xs={12} container>
              <Typography variant="h8">Sequencing Number Form</Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            justifyContent={"flex-end"}
            alignItems={"center"}
            container
          >
            <Grid item xs={12}>
              <Typography
                fullWidth
                style={{ marginLeft: "2.3rem" }}
                variant="h8"
              >
                To
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField size="small" id="outlined-basic" variant="outlined" />
            </Grid>
          </Grid>
        </Grid>
        <Grid spacing={1} item container xs={12}>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h8">Processing Mode</Typography>
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
              <Typography variant="h8"> UETR</Typography>
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

export default FormThree;
