import React from "react";

import { Typography, Container } from "@mui/material";

interface Props {
  data: {
    name: string;
  };
}

export function Footer({ data }: Props) {
  return (
    <>
      <Container sx={{ py: 5, textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {data.name}
        </Typography>

        <Typography>&copy; {new Date().getFullYear()}</Typography>
      </Container>
    </>
  );
}
