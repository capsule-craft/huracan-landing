import { AppBar, Toolbar, Container, Typography } from "@mui/material";

interface Props {
  data: {
    title: string;
  };
}

export function TopBar({ data }: Props) {
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
            {data.title}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
