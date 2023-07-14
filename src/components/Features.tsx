import React from "react";

import { Typography, Container, ListItem, ListItemAvatar, Avatar, ListItemText, Box } from "@mui/material";
import * as MaterialIcon from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

interface Props {
  data: {
    title: string;
    list: {
      title: string;
      icon: string;
      text: string;
    }[];
  };
}

export function Features({ data }: Props) {
  const featuresData = data.list.map((item) => ({ ...item, icon: MaterialIcon[item.icon] }));

  const features = featuresData.map((i) => (
    <Grid xs={12} md={6} key={i.title}>
      <ListItem style={{ alignItems: "start" }}>
        <ListItemAvatar sx={{ mt: 1 }}>
          <Avatar style={{ backgroundColor: "transparent", border: `1px solid #8BA3C7` }}>
            <i.icon htmlColor="#fff" />
          </Avatar>
        </ListItemAvatar>

        <ListItemText style={{ alignItems: "start" }} primary={i.title} secondary={i.text} />
      </ListItem>
    </Grid>
  ));

  return (
    <>
      <Box sx={{ py: 5 }} style={{ backgroundColor: "#0E203B" }}>
        <Typography
          variant="h4"
          sx={{
            mb: 5,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {data.title}
        </Typography>

        <Container>
          <Grid container xs md={10} mdOffset={1}>
            <Grid container spacing={2}>
              {features}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
