import { Typography, Container, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

export function UseCases() {
  const data = [
    "On-Chain Games",
    "NFT Marketplaces",
    "DeFi Dashboards",
    "Token Monitoring Tools",
    "NFT Management Tools",
    "Object Explorers",
    "...And Many More",
  ];

  const features = data.map((usecase) => (
    <div style={{}}>
      <CheckCircle sx={{ fontSize: "14px" }} htmlColor="#fff" />
      &nbsp; &nbsp;
      <span>{usecase}</span>
    </div>
  ));

  return (
    <>
      <Box sx={{ py: 5 }} style={{ backgroundColor: "#0E203B " }}>
        <Container sx={{ textAlign: "center", mb: 5 }}>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
            Build With Huracan
          </Typography>

          <Grid container mdOffset={3} md={6}>
            <Typography variant="body1">
              Leveraging the power of Huracan opens up a wide range of possibilities for building impactful apps. Some
              app ideas are listed below:
            </Typography>
          </Grid>
        </Container>

        <Container>
          <Grid container xs md={10} mdOffset={1}>
            <Grid spacing={2}>{features}</Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
