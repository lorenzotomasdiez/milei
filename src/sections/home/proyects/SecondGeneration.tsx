import { Iconify, Scrollbar } from "@app/components";
import { Grid, Typography } from "@mui/material";
import { Box, IconButton } from "@mui/material";
import React from "react";

interface Props{
  onClose: () => void;
}

const SecondGeneration = ({onClose}:Props) => {
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
          Reformas de segunda generacion
        </Typography>
        <Grid container spacing={5} mt="10px" direction={'column'} sx={{textAlign:"justify"}}>
          <Grid item xs={12} md={12}>
            <Typography variant="subtitle1">
              1. Reforma del sistema previsional para que tus aportes sean
              tuyos.
            </Typography>
            <Typography variant="body2" component="p">
              Implementación de un sistema basado en la capitalización
              individual, privada, segura y voluntaria, cuyos aportes sean
              administrados por organizaciones elegidas libremente por los
              trabajadores.
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="subtitle1">
              2. Promoción de la descentralización administrativa y
              desburocratización del Estado.
            </Typography>
            <Typography variant="body2" component="p">
              Descentralización administrativa desde el Estado nacional hacia
              una órbita municipal inspirada en el denominado criterio de “base
              cero”. Mejora de las condiciones de trabajo del personal del
              Estado por medio de incentivos. Los sueldos de los empleados
              públicos aumentarán o disminuirán en la medida de su eficacia y
              eficiencia.
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="subtitle1">
              3. Modificación del actual sistema de coparticipación de
              impuestos.
            </Typography>
            <Typography variant="body2" component="p">
              Para que las provincias generen sus propias condiciones de
              sustentabilidad económica y no dependan de los recursos provistos
              por los ciudadanos de otras jurisdicciones a través del Estado
              nacional. Eliminar progresivamente los impuestos que gravan la
              producción, la ganancia, el trabajo y los emprendimientos y que
              atentan contra el crecimiento económico Específicamente, el
              impuesto a las ganancias de los trabajadores, Ingresos Brutos, los
              impuestos a las donaciones y a la herencia, el impuesto al cheque,
              el I.V.A. y las cargas sociales para el trabajador para reducir el
              empleo informal.
            </Typography>
          </Grid>
        </Grid>
      </Scrollbar>
    </Box>
  );
};

export default SecondGeneration;
