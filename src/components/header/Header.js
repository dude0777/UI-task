import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MUIDataTable from "mui-datatables";
import { Grid, Dialog, DialogContent, Typography } from "@mui/material";

function Header() {
  const columns = [
    {
      name: "name",
      label: "First Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "company",
      label: "Modification",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "Override",
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

  const [isModalOpen, setModalOpen] = useState(false);

  const handleEditClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Grid
        justifyContent={"center"}
        alignItems={"center"}
        container
        spacing={1}
        sx={{
          padding: "1rem",
        }}
      >
        <Grid
          item
          spacing={0}
          container
          sm={10}
          xs={12}
          justifyContent={"flex-start"}
        >
          <Grid item xs={12} sm={0.5}>
            <EditIcon onClick={handleEditClick} />
          </Grid>

          <Grid item xs={12} sm={11}>
            Modified Values
          </Grid>
        </Grid>

        <Grid item sm={2} xs={12}>
          <CallIcon />
          <ChatBubbleIcon style={{ justifyContent: "flex-end" }} />
        </Grid>
      </Grid>

      <div className="top" style={{ padding: "5px" }}>
        <Grid container spacing={1}></Grid>
      </div>

      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        fullWidth
        maxWidth="md"
      >
        <DialogContent
          style={{
            padding: "0",
            backgroundColor: "white",
            boxShadow: "none",
            marginBottom: "1rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              backgroundColor: "#FF8901",
              color: "white",
              padding: "0.7rem",
              marginBottom: "1rem",
            }}
          >
            Maker Modified Values
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "black",
              zIndex: "100",
              padding: "1rem",
              fontSize: "1rem",
            }}
          >
            Please verify the modified values first
          </Typography>
          <div
            style={{
              marginTop: "1rem",
              backgroundColor: "white",
              overflow: "hidden",
            }}
          >
            <MUIDataTable columns={columns} options={options} />{" "}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
