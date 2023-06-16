import { Container, Button, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "mui-image";
import { TopBar } from "./TopBar";

interface Props {
  topBarData: { title: string };
  data: {
    title: string;
    body: string;
    buttonText: string;
    buttonLink: string;
    imageUrl: string;
  };
}

export function Hero({ data, topBarData }: Props) {
  return (
    <Box
      sx={{ mb: 8 }}
      style={{
        background: "linear-gradient(#0E203B 0%, #0E203B 65%, transparent 100%)",
      }}
    >
      <TopBar data={topBarData} />
      <Container>
        <Grid container>
          <Grid md={6} style={{ marginTop: "100px" }}>
            <Typography sx={{ fontWeight: "bold", mb: 3 }} variant="h4">
              {data.title}
            </Typography>

            <Typography variant="body1">{data.body}</Typography>

            <Box sx={{ mb: 5, mt: 3 }}>
              <Button
                style={{ borderRadius: 20 }}
                size="large"
                disableElevation={true}
                // @ts-ignore
                color="white"
                variant="outlined"
                target="_blank"
                href={data.buttonLink}
              >
                {data.buttonText} &rarr;
              </Button>
            </Box>
          </Grid>

          <Grid container md={6}>
            <Grid md={3} />
            <Grid xs={12} sm={12} md={9}>
              <Image style={{ margin: "auto", display: "block", height: "unset" }} src={data.imageUrl} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
