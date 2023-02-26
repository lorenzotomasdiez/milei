import { Iconify, Scrollbar } from "@app/components";
import { Grid, Typography } from "@mui/material";
import { Box, IconButton } from "@mui/material";
import React from "react";

interface Props{
  onClose: () => void;
}

const FirstGeneration = ({onClose}:Props) => {
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
          Reformas de primera generacion
        </Typography>
        <Grid container spacing={5} mt="10px" direction={'column'} sx={{textAlign:"justify"}}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              1. Eliminación del gasto improductivo del Estado y de la
              corrupción.
            </Typography>
            <Typography variant="body2" component="p">
              La corrupción no solo es repudiable en términos morales, sino que
              además nos cuesta hasta el 5 % del PBI. Por lo tanto, es urgente
              desarticular los mecanismos que la hacen posible. Además, es
              necesario simplificar los trámites de la administración pública,
              hacerla más transparente y eliminar el gasto ineficiente,
              implementando un nuevo sistema de contabilidad pública y
              transparente. Menos presión tributaria es menos gasto público, lo
              que implica un mayor crecimiento económico. Menos gasto
              improductivo del Estado es menos emisión monetaria, y esto
              significa también menos inflación.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              2. Incentivo para la generación de empleo genuino y de calidad, y
              reducción de impuestos que castigan al trabajador.
            </Typography>
            <Typography variant="body2" component="p">
              Promover la libertad de contratación y la consolidación de un
              mercado de trabajo libre para aumentar salarios y empleos sin
              dañar derechos adquiridos. Asimismo, implementar un seguro de
              desempleo hacia adelante basado en un régimen de capitalización
              individual, en el que cada trabajador hará aportes mientras esté
              en actividad y de cuyos fondos será dueño exclusivo, disponiendo
              de los mismos libremente cuando quede sin empleo o cuando decida
              retirarse de la actividad laboral. Además, durante el primer tramo
              de la contratación, las empresas contarán con una fuerte reducción
              de las contribuciones patronales para incentivar la contratación
              de trabajadores en blanco.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              3. Apertura al comercio para crecer y reducir la pobreza.
            </Typography>
            <Typography variant="body2" component="p">
              Tratados de libre comercio con todas las regiones o países que
              deseen acceder a nuestros mercados, promoviendo el respeto
              irrestricto por el libre intercambio multilateral de bienes, mano
              de obra, recursos materiales y económicos y favoreciendo el
              intercambio comercial con todos los países del mundo.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              4. Seguridad y Justicia.
            </Typography>
            <Typography variant="body2" component="p">
              Trabajar en la mejora de la seguridad y la justicia para revertir
              la creciente ola de violencia e inseguridad que nos afecta.
              Revalorización de las fuerzas de seguridad. Promoción de medidas
              que favorezcan su mejor equipamiento y la continua capacitación
              profesional, con el fin de obtener mayor eficacia y eficiencia en
              el combate contra el delito. Reconocimiento de mejores condiciones
              de trabajo. Promover un sistema de justicia más eficaz, libre e
              independiente. Aumento de las penas para los delitos cometidos con
              armas de fuego a partir de su sola exhibición, y desregulación del
              mercado legal de armas de fuego para promover su uso legítimo y
              responsable por parte de los ciudadanos.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">5. Sistema financiero.</Typography>
            <Typography variant="body2" component="p">
              Reforma del sistema financiero que permita avanzar hacia una banca
              libre y una libre elección de moneda, previa eliminación del BCRA.
              Eliminación de la inflación mediante la aplicación de cuatro
              etapas. Primera etapa: Pasar del sistema de encaje fraccionario a
              la banca Simón. Segunda etapa: Banca libre y eliminación del BCRA.
              Tercera etapa: Competencia de moneda que permita a las personas
              elegir un sistema monetario. Cuarta etapa: Liquidación de activos
              y pasivos y eliminación definitiva del BCRA.
            </Typography>
          </Grid>
        </Grid>
      </Scrollbar>
    </Box>
  );
};

export default FirstGeneration;
