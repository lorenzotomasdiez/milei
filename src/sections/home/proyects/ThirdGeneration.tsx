import { Iconify, Scrollbar } from "@app/components";
import { Grid, Typography } from "@mui/material";
import { Box, IconButton } from "@mui/material";
import React from "react";

interface Props{
  onClose: () => void;
}

const ThirdGeneration = ({onClose}:Props) => {
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
          Reformas de tercera generacion
        </Typography>
        <Grid container spacing={5} mt="10px" direction={'column'} sx={{textAlign:"justify"}}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">1. Sistema Educativo.</Typography>
            <Typography variant="body2" component="p">
              No al adoctrinamiento en la educación. El Estado impone un único
              modelo de educación que adoctrina y atenta contra la libertad de
              pensamiento, lo que no podemos aceptar. Libre elección e igualdad
              de condiciones para acceder a la educación de calidad en
              instituciones públicas o privadas. Para eso, es necesaria la
              implementación de Cupones Escolares (Vouchers) para garantizar el
              acceso a la educación pública y privada indistintamente, y ampliar
              así la opción de los estudiantes de elegir dónde formarse. Esto
              generará una optimización de la calidad educativa mediante la
              mejora competitiva de todo el sistema educativo, en términos de
              contenido, nivel de los profesores, de las áreas a priorizar y
              desarrollar, infraestructura, entre otros aspectos, que tendrán
              como beneficiario principal a los estudiantes. El Voucher
              Educativo es un cupón que el Estado le entregará a cada estudiante
              para que acceda a la educación en el establecimiento que elija
              para estudiar.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              2. Reforma Del Sistema De Salud.
            </Typography>
            <Typography variant="body2" component="p">
              Eliminación de la obligatoriedad. El sindicalismo perderá su rol
              de intermediario en la provisión de la salud a través de las Obras
              Sociales y se promoverá un libre mercado de seguros de salud y
              prestaciones médicas donde el Estado tendrá el rol de supervisor y
              la responsabilidad primaria de garantizar cobertura a los sectores
              con menos recursos. Se permitirá la libre y rápida derivación de
              aportes a la obra social o prepaga que desee y prefiera el
              trabajador sin límites mínimos de permanencia, incluidos los
              trabajadores del sector público.
            </Typography>
          </Grid>
        </Grid>
      </Scrollbar>
    </Box>
  );
};

export default ThirdGeneration;
