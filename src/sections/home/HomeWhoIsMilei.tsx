import { m } from "framer-motion";
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  Container,
  Modal,
  Typography,
} from "@mui/material";
import { MotionViewport, varFade } from "../../components/animate";
import { useState } from "react";
import { FirstGeneration, SecondGeneration, ThirdGeneration } from "./proyects";

interface ComponentProps{
  onClose: () => void;
}

const CARDS = [
  {
    title: "Primera Generacion",
    description:
      "Las Reformas de primera generación buscan mejorar la economía de el país. Estas reformas incluyen la eliminación de la corrupción y el gasto improductivo del Estado, incentivos para la generación de empleo genuino y de calidad, la apertura al comercio, la mejora de la seguridad y la justicia, y la reforma del sistema financiero. El objetivo final es eliminar la inflación y lograr un mayor crecimiento económico.",
    component: ({onClose}:ComponentProps) => (
      <FirstGeneration onClose={onClose}/>
    ),
  },
  {
    title: "Segunda Generacion",
    description:
      "Reformas de segunda generación: se propone un sistema previsional basado en la capitalización individual, la descentralización administrativa del Estado hacia una órbita municipal, mejoras en las condiciones de trabajo del personal estatal y la eliminación progresiva de impuestos que gravan la producción, ganancia, trabajo y emprendimientos.",
    component: ({onClose}:ComponentProps) => (<SecondGeneration onClose={onClose}/>),
  },
  {
    title: "Tercera Generacion",
    description:
      "Las Reformas de tercera generación son del sistema educativo y del sistema de salud. La primera busca garantizar la libertad de elección y la igualdad de condiciones para acceder a la educación de calidad en instituciones públicas o privadas mediante la implementación de Cupones Escolares (Vouchers). La segunda reforma busca eliminar la obligatoriedad de la afiliación a obras sociales, permitiendo a los trabajadores elegir libremente su seguro de salud o prepaga sin límites de permanencia mínima.",
    component: ({onClose}:ComponentProps) => (<ThirdGeneration onClose={onClose}/>),
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  position: "relative",
  padding: theme.spacing(10, 0),
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === "light"
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    border: 0,
    maxWidth: 380,
    minHeight: 440,
    margin: "auto",
    textAlign: "center",
    padding: theme.spacing(5, 5),
    boxShadow: theme.customShadows.z12,
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    "&.cardLeft": {
      [theme.breakpoints.up("md")]: { marginTop: -40 },
    },
    "&.cardCenter": {
      [theme.breakpoints.up("md")]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        "&:before": {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: "auto",
          position: "absolute",
          width: "calc(100% - 40px)",
          height: "calc(100% - 40px)",
          borderRadius: Number(theme.shape.borderRadius) * 2,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
        },
      },
    },
  };
});

const ModalStyled = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "90vh",
  backgroundColor: "rgba(255,255,255,0.9)",
  borderRadius: "25px",
}));

export default function HomeMinimal() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  const [isOpen, setIsOpen] = useState<null | {
    component: ({ onClose }: ComponentProps) => JSX.Element;
    open: boolean;
  }>(null);

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 10, md: 15 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography
              component="div"
              variant="overline"
              sx={{ mb: 2, color: "text.disabled" }}
            >
              PROYECTO DE ESTADO
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" fontWeight={"bold"}>
              Reformas de 3 Generaciones
            </Typography>
          </m.div>
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: { xs: 5, lg: 10 },
            gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(3, 1fr)" },
          }}
        >
          {CARDS.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <CardStyle
                className={
                  (index === 0 && "cardLeft") ||
                  (index === 1 && "cardCenter") ||
                  ""
                }
              >
                <Typography variant="h5" paragraph>
                  {card.title}
                </Typography>
                <Typography
                  sx={{ color: isLight ? "text.secondary" : "common.white" }}
                >
                  {card.description}
                </Typography>
                <Button
                  variant="text"
                  sx={{ marginTop: "10px" }}
                  onClick={() =>
                    setIsOpen({ component: card.component, open: true })
                  }
                >
                  Leer mas
                </Button>
              </CardStyle>
            </m.div>
          ))}
        </Box>
      </Container>
      {!!isOpen && (
        <Modal open={!!isOpen} onClose={() => setIsOpen(null)}>
          <ModalStyled>{isOpen.component({onClose:() => setIsOpen(null)})}</ModalStyled>
        </Modal>
      )}
    </RootStyle>
  );
}
