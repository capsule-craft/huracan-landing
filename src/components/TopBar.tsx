import { AppBar, Toolbar, Container, Typography } from "@mui/material";

export function TopBar() {
  return (
    <AppBar position="static" elevation={0} style={{ backgroundColor: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: "inherit",
              letterSpacing: ".1rem",
              textDecoration: "none",
            }}
          >
            Huracan
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
