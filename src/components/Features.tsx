import { Typography, Container, ListItem, ListItemAvatar, Avatar, ListItemText, Box } from "@mui/material";
import { Update, Layers, EditAttributesOutlined, Api } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

function Features() {
  const data = [
    {
      title: "GraphQL Endpoint",
      icon: Api,
      text: "Efficiently query and retrieve objects through our GraphQL endpoint, streamlining data manipulation and retrieval.",
    },
    {
      title: "Realtime Updates",
      icon: Update,
      text: " Easily stream objects in real time, receiving live updates to build applications that react in real-time to object updates.",
    },
    {
      title: "Custom GraphQL Queries",
      icon: EditAttributesOutlined,
      text: "Craft precise, customized GraphQL queries to harness your application's object model and retrieve tailored data.",
    },
    {
      title: "Retrieve Dynamic Fields",
      icon: Layers,
      text: "Effortlessly access objects dynamic fields, simplifying complex object handling and enabling seamless objects navigation.",
    },
  ];

  const features = data.map((i) => (
    <Grid xs={12} md={6}>
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
          Features
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

export { Features };
