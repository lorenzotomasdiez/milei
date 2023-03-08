import { Iconify, Scrollbar } from "@app/components";
import { useLocales } from "@app/hooks";
import { Grid, Typography } from "@mui/material";
import { Box, IconButton } from "@mui/material";
import React from "react";

interface Props{
  onClose: () => void;
}

const SecondGeneration = ({onClose}:Props) => {
  const {translate} = useLocales();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: 5,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <IconButton sx={{ position: "absolute", right: 0, top: 0, margin: 2 }} onClick={onClose}>
        <Iconify icon={"ic:round-close"} width="20px" height="20px" />
      </IconButton>
      <Scrollbar>
        <Typography variant="h3" textAlign="center">
          {translate('generationsPlan.titleSecondGeneration')}
        </Typography>
        <Grid container spacing={5} mt="10px" direction={'column'} sx={{textAlign:"justify"}}>
          <Grid item xs={12} md={12}>
            <Typography variant="subtitle1">
              {translate('generationsPlan.secondGenerationContent0')}
            </Typography>
            <Typography variant="body2" component="p">
              {translate('generationsPlan.secondGenerationContent1')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="subtitle1">
              {translate('generationsPlan.secondGenerationContent2')}
            </Typography>
            <Typography variant="body2" component="p">
              {translate('generationsPlan.secondGenerationContent3')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="subtitle1">
              {translate('generationsPlan.secondGenerationContent4')}
            </Typography>
            <Typography variant="body2" component="p">
              {translate('generationsPlan.secondGenerationContent5')}
            </Typography>
          </Grid>
        </Grid>
      </Scrollbar>
    </Box>
  );
};

export default SecondGeneration;
