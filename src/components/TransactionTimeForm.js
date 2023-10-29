import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import { Grid, Typography, Box, Card } from "@mui/material";
import MUIDataTable from "mui-datatables";

function TransactionTimeForm() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid spacing={1} item container xs={12}>
          <Grid item xs={12}>
            <Typography variant="h8">Transaction Time Form</Typography>
          </Grid>
          <Grid item container spacing={2} xs={12}>
            <Grid item xs={7}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  sx={{ padding: "0" }}
                  disableFuture
                  openTo="year"
                  views={["year", "month", "day"]}
                  format="YYYY-MM-DD"
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={5}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  size="small"
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
        <Grid spacing={1} item container xs={12}>
          <Grid item xs={12}>
            <Typography variant="h8">Transaction Time To </Typography>
          </Grid>
          <Grid item container spacing={2} xs={12}>
            <Grid item xs={7}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  sx={{ padding: "0" }}
                  disableFuture
                  openTo="year"
                  views={["year", "month", "day"]}
                  format="YYYY-MM-DD"
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={5}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  size="small"
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>

        <Grid spacing={1} item container xs={12}>
          <Grid item xs={12}>
            <Typography variant="h8">Debit Value Date Form</Typography>
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
        <Grid spacing={1} item container xs={12}>
          <Grid item xs={12}>
            <Typography variant="h8"> Debit Value Date To</Typography>
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

        <Grid spacing={1} item container xs={12}>
          <Grid item xs={12}>
            <Typography variant="h8">Settled Time Form</Typography>
          </Grid>
          <Grid item container spacing={2} xs={12}>
            <Grid item xs={7}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  sx={{ padding: "0" }}
                  disableFuture
                  openTo="year"
                  views={["year", "month", "day"]}
                  format="YYYY-MM-DD"
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={5}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  size="small"
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
        <Grid spacing={1} item container xs={12}>
          <Grid item xs={12}>
            <Typography variant="h8">Settled Time To</Typography>
          </Grid>
          <Grid item container spacing={2} xs={12}>
            <Grid item xs={7}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  sx={{ padding: "0" }}
                  disableFuture
                  openTo="year"
                  views={["year", "month", "day"]}
                  format="YYYY-MM-DD"
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={5}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  size="small"
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default TransactionTimeForm;
