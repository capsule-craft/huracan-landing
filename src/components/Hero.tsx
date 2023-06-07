import { Container, Button, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "mui-image";
import { TopBar } from "./TopBar";

function Hero() {
  return (
    <Box
      sx={{ mb: 8 }}
      style={{
        background: "linear-gradient(#0E203B 0%, #0E203B 65%, transparent 100%)",
      }}
    >
      <TopBar />
      <Container>
        <Grid container>
          <Grid md={6} style={{ marginTop: "100px" }}>
            <Typography sx={{ fontWeight: "bold", mb: 5 }} variant="h3">
              Powerful and Efficient Object Indexer on the Sui Network
            </Typography>

            <Typography variant="body1">
              Huracan grants you effortless and real-time access to Sui objects and their states. Dive into a world of
              seamless exploration and unleash the full potential of the Sui Network with our powerful indexer at your
              fingertips.
            </Typography>

            <Box sx={{ mb: 5, mt: 3 }}>
              <Button
                style={{ borderRadius: 20 }}
                size="large"
                disableElevation={true}
                // @ts-ignore
                color="white"
                variant="outlined"
              >
                Try Huracan &rarr;
              </Button>
            </Box>
          </Grid>

          <Grid container md={6}>
            <Grid md={3} />
            <Grid xs={12} sm={12} md={9}>
              <Image style={{ margin: "auto", display: "block", height: "unset" }} src="/huracan.png" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export { Hero };
