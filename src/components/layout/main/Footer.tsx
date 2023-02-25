import { PATH_COMPANY } from "@app/routes";
import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import Logo from '../../Logo';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 5,
        textAlign: "center",
        position: "relative",
        bgcolor: "background.default",
      }}
    >
      <Container>
        <Logo sx={{ mb: 1, mx: "auto" }} />
        <Typography variant="caption" component="p">
          © All rights reserved
          <br /> made by &nbsp;
          <Link href={PATH_COMPANY}>Theno Tech</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
