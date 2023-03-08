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
import { useLocales } from "@app/hooks";

interface ComponentProps{
  onClose: () => void;
}

const CARDS = [
  {
    title: "generationsPlan.titleFirstGeneration",
    description:"generationsPlan.summaryFirstGeneration",
    component: ({onClose}:ComponentProps) => (
      <FirstGeneration onClose={onClose}/>
    ),
  },
  {
    title: "generationsPlan.titleSecondGeneration",
    description:"generationsPlan.summarySecondGeneration",
    component: ({onClose}:ComponentProps) => (<SecondGeneration onClose={onClose}/>),
  },
  {
    title: "generationsPlan.titleThirdGeneration",
    description:"generationsPlan.summaryThirdGeneration",
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

export default function HomeMission() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  const [isOpen, setIsOpen] = useState<null | {
    component: ({ onClose }: ComponentProps) => JSX.Element;
    open: boolean;
  }>(null);

  const { translate } = useLocales();

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
              {translate('generationsPlan.helper')}
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" fontWeight={"bold"}>
              {translate('generationsPlan.title')}
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
                  {translate(card.title)}
                </Typography>
                <Typography
                  sx={{ color: isLight ? "text.secondary" : "common.white" }}
                >
                  {translate(card.description)}
                </Typography>
                <Button
                  variant="text"
                  sx={{ marginTop: "10px" }}
                  onClick={() =>
                    setIsOpen({ component: card.component, open: true })
                  }
                >
                  {translate('generationsPlan.readMore')}
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
