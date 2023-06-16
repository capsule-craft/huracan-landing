import { Typography, Container, ListItem, ListItemAvatar, Avatar, ListItemText, Box } from "@mui/material";
import { Update, Layers, EditAttributesOutlined, Api } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

export function Features() {
  const data = [
    {
      title: "GraphQL Subscriptions",
      icon: Api,
      text: "Run a query, display a view, then refresh the results in real-time! Smooth as butter, thanks to persistent websocket connections pushing live Sui state-updates right into your client-app.",
    },
    {
      title: "Ownership",
      icon: Update,
      text: "Find every object your users own, even if they’re locked away in a kiosk on the other side of the planet. No need to understand complex, module-specific ownership logic! Phew.",
    },
    {
      title: "Custom Queries",
      icon: EditAttributesOutlined,
      text: "Does your genius new module have some specific logic you wish other apps could understand? No problem; our GraphQL server is opensource, so you can write your custom queries and resolvers, then submit a PR to make them available to the entire Sui ecosystem, or keep them to yourself and run your own forked GraphQL server while ingesting our live Sui data.",
    },
    {
      title: "Filter, Sort, Group",
      icon: Layers,
      text: "Want to group a user’s objects by game? Sure. Want to sort a user’s objects by the last time they were last modified? No problem. Want to return only objects that are for sale, and sort them price? Easy peasy",
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
