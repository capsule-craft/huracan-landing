import { Container, Button, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "mui-image";
import { TopBar } from "./TopBar";

export function Hero() {
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
              Powerful, Simple Read-API
            </Typography>

            <Typography variant="body1">
              Save yourself months of development time compared to building your own custom indexer; we’ve ingested all
              of Sui mainnet, enriched it, and made it queryable behind a powerful and simple GraphQL API.
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
                Tryout the Playground &rarr;
              </Button>
            </Box>
          </Grid>

          <Grid container md={6}>
            <Grid md={3} />
            <Grid xs={12} sm={12} md={9}>
              <Image style={{ margin: "auto", display: "block", height: "unset" }} src="/huracan1.png" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
