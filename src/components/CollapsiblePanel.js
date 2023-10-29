import * as React from "react";
import FormThree from "./FormThree";
import TransactionTimeForm from "./TransactionTimeForm";
import classes from "./CollapsiblePanel.module.css";
import ReplayIcon from "@mui/icons-material/Replay";

import TextField from "@mui/material/TextField";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import MUIDataTable from "mui-datatables";

import { Grid, Typography, Box } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FormTwo from "./FormTwo";
export default function CollapsiblePanel() {
  const [card, setCard] = useState(false);

  const handleClick = () => {
    setCard(!card);
  };

  const columns = [
    {
      name: "company",
      label: "Transaction Reference",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "company",
      label: "External Reference",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "company",
      label: "Clean Payment  Reference",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "Transaction Status",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "Payment Type",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "Transaction Date",
      options: {
        filter: true,
        sort: false,
      },
    },

    {
      name: "city",
      label: "pending With User",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "Credit Account Number",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "Debit Value Date",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "Debit Value Date",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "Debit Amount",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "Debit currency",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "Session Number",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "Sequence Number",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "Details",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "Audit",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const options = {
    download: false,
    filter: false,
    print: false,
    search: false,
    selectableRows: false,
    viewColumns: false,
  };

  return (
    <>
      <Grid
        container
        direction={"column"}
        sx={{
          padding: "0.5rem",
        }}
      >
        <Grid
          item
          xs={12}
          container
          className={card ? classes.bordercomp : classes.bordernone}
        >
          <Grid
            item
            xs={12}
            spacing={0}
            container
            sx={{
              backgroundColor: "#2368B5",
              padding: "1rem",
              color: "white",
              marginBottom: "0rem",
            }}
          >
            <Grid item xs={11.7}>
              <Typography variant="h7">Collapsible Panel</Typography>
            </Grid>

            <Grid item spacing={0} xs={0.3}>
              {card ? (
                <ExpandMoreIcon onClick={handleClick} />
              ) : (
                <ExpandLessIcon onClick={handleClick} />
              )}
            </Grid>
          </Grid>
          {card && (
            <Grid
              spacing={0}
              sx={{
                padding: "0.9rem",
                paddingLeft: "1.3rem",
              }}
              item
              xs={12}
              container
            >
              <Grid
                style={{
                  borderRadius: "1px",
                  border: "2px solid black",
                  padding: "0.5rem",
                  marginRight: "1.2rem",
                }}
                item
                sm={3.608}
                xs={12}
              >
                <TransactionTimeForm />
              </Grid>

              <Grid
                style={{
                  borderRadius: "1px",
                  border: "2px solid black",
                  padding: "0.5rem",
                  marginRight: "1.2rem",
                }}
                item
                sm={4}
                xs={12}
              >
                <FormThree />
              </Grid>
              <Grid
                item
                style={{
                  borderRadius: "1px",
                  border: "2px solid black",
                  padding: "0.5rem",
                  marginRight: "0.5rem",
                }}
                sm={4}
                xs={12}
              >
                <FormTwo />
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid item sx={{ marginTop: "4rem" }}>
          <Box
            sx={{
              overflow: "hidden",
              border: " 2px solid #2368b5",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                backgroundColor: "#277cdc",
                padding: "1rem",
                color: "white",
                marginBottom: "0rem",
              }}
            >
              Transactions
            </Typography>

            <MUIDataTable columns={columns} options={options} />
          </Box>
        </Grid>
        <Grid item sx={{ marginTop: "4rem" }} xs={12}>
          <Box
            sx={{
              overflow: "hidden",
              border: " 2px solid #2368b5",
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  backgroundColor: "#277cdc",
                  padding: "1rem",
                  color: "white",
                  marginBottom: "0rem",
                }}
              >
                Search Customer
              </Typography>{" "}
            </Grid>
            <Grid
              item
              container
              sx={{ padding: "1rem", paddingBottom: "3rem" }}
            >
              <Grid item xs={2}>
                <Typography variant="h9">Customer Account</Typography>{" "}
              </Grid>
              <Grid item container alignItems={"center"} xs={9} gap={0.5}>
                <Grid></Grid>
                <Grid>
                  <TextField label="Customer Account" size="small" />
                </Grid>
                <Grid>
                  {" "}
                  <ReplayIcon
                    style={{
                      color: "white",
                      fontSize: "2.1rem",
                      backgroundColor: "#277cdc",
                    }}
                  />{" "}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
