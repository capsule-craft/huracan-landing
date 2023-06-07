import { Typography, Container } from "@mui/material";

export function Footer() {
  return (
    <>
      <Container sx={{ py: 5, textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Huracan
        </Typography>

        <Typography>&copy; {new Date().getFullYear()}</Typography>
      </Container>
    </>
  );
}
