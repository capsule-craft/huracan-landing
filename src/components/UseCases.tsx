import { Typography, Container, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

interface Props {
  data: {
    title: string;
    body: string;
    listTitle: string;
    list: string[];
  };
}

export function UseCases({ data }: Props) {
  const usecases = data.list.map((usecase) => (
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
            {data.title}
          </Typography>

          <Grid container mdOffset={3} md={6}>
            <Typography variant="body1">{data.body}</Typography>
          </Grid>
        </Container>

        <Container>
          <Grid container xs md={10} mdOffset={1}>
            <Grid spacing={2}>
              <Typography variant="body1" sx={{ mb: 2, fontWeight: "bold" }}>
                {data.listTitle}
              </Typography>

              {usecases}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
