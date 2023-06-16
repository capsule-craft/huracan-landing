import { Typography, Container, Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export function AfterHero() {
  return (
    <>
      <Container sx={{ my: 5, py: 4 }}>
        <Grid container>
          <Grid md={6} container sx={{ order: { xs: 2, md: 1 } }}>
            <Grid xs={6} xsOffset={3}>
              <img
                src="/huracan2.png"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>

          <Grid sx={{ mb: 5, order: { xs: 1, md: 2 } }} md={6}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
              It’s like a Sui Fullnode, On Crack
            </Typography>

            <Typography variant="body1">
              Huracan’s ETL-worker can ingest 3,000 objects per second using a single thread. Our entire data pipeline
              adds less than a second of latency compared to a Sui Fullnode. And it’s all performant, opensource Rust
              code.
            </Typography>

            <Box sx={{ mb: 5, mt: 3 }}>
              <Button
                style={{ borderRadius: 20 }}
                size="large"
                disableElevation={true}
                // @ts-ignore
                color="white"
                variant="outlined"
                target="_blank"
                href="https://mainnet.huracan.tech"
              >
                Checkout Our Docs &rarr;
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
