import { Iconify, Scrollbar } from "@app/components";
import { useLocales } from "@app/hooks";
import { Grid, Typography } from "@mui/material";
import { Box, IconButton } from "@mui/material";
import React from "react";

interface Props{
  onClose: () => void;
}

const FirstGeneration = ({onClose}:Props) => {
  const { translate } = useLocales();
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
          {translate('generationsPlan.titleFirstGeneration')}
        </Typography>
        <Grid container spacing={5} mt="10px" direction={'column'} sx={{textAlign:"justify"}}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {translate('generationsPlan.firstGenerationContent0')}
            </Typography>
            <Typography variant="body2" component="p">
              {translate('generationsPlan.firstGenerationContent1')}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {translate('generationsPlan.firstGenerationContent2')}
            </Typography>
            <Typography variant="body2" component="p">
              {translate('generationsPlan.firstGenerationContent3')}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {translate('generationsPlan.firstGenerationContent4')}
            </Typography>
            <Typography variant="body2" component="p">
              {translate('generationsPlan.firstGenerationContent5')}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {translate('generationsPlan.firstGenerationContent6')}
            </Typography>
            <Typography variant="body2" component="p">
              {translate('generationsPlan.firstGenerationContent7')}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">{translate('generationsPlan.firstGenerationContent8')}</Typography>
            <Typography variant="body2" component="p">
              {translate('generationsPlan.firstGenerationContent9')}
            </Typography>
          </Grid>
        </Grid>
      </Scrollbar>
    </Box>
  );
};

export default FirstGeneration;
