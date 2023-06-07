import { Typography, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function AfterHero() {
  return (
    <>
      <Container sx={{ my: 5, py: 4 }}>
        <Grid container>
          <Grid md={6} container sx={{ order: { xs: 2, md: 1 } }}>
            <Grid xs={6} xsOffset={3}>
              <img
                src="/stars.svg"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>

          <Grid sx={{ mb: 5, order: { xs: 1, md: 2 } }} md={6}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
              Super Fast and Efficient
            </Typography>

            <Typography variant="body1">
              Huracan indexes Sui objects with rapid speed and unparalleled efficiency. It promptly captures and indexes
              objects as they appear on the blockchain, ensuring real-time updates.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export { AfterHero };
