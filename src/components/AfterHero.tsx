import { Typography, Container, Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

interface Props {
  data: {
    title: string;
    body: string;
    buttonText: string;
    buttonLink: string;
    imageUrl: string;
  };
}

export function AfterHero({ data }: Props) {
  return (
    <>
      <Container sx={{ my: 5, py: 4 }}>
        <Grid container>
          <Grid md={6} container sx={{ order: { xs: 2, md: 1 } }}>
            <Grid xs={6} xsOffset={3}>
              <img
                src={data.imageUrl}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>

          <Grid sx={{ mb: 5, order: { xs: 1, md: 2 } }} md={6}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
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
                disabled
              >
                {data.buttonText} &rarr;
              </Button>
              <Typography variant="body2" sx={{ fontSize: "12px", ml: 1, mt: 1 }}>
                Coming Soon
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
