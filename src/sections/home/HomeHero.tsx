import { MotionContainer, TimerCounter, varFade } from "@app/components";
import {
  Container,
  Stack,
  StackProps,
  styled,
  Typography,
} from "@mui/material";
import { m } from "framer-motion";

const RootStyle = styled(m.div)(({ theme }) => ({
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  position: "relative",
  overflow: "hidden",
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

const ContentStyle = styled((props: StackProps) => (
  <Stack spacing={{xs:3, md:5}} {...props} />
))(({ theme }) => ({
  zIndex: 10,
  position: "relative",
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(15),
  }
}));

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  bottom: 0,
  zIndex: 8,
  width:"100%",
  height: "100%",
  objectFit:"cover",
  margin: "auto",
  position: "absolute",
}));

export default function HomeHero() {
  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle
          alt="overlay"
          src="/assets/overlay.svg"
          variants={varFade().in}
        />
        <HeroImgStyle
          alt="hero"
          src="/assets/milei-plaza.jpg"
          variants={varFade().inUp}
        />

        <Container maxWidth="lg">
          <ContentStyle>
            <m.div variants={varFade().inDown}>
              <Typography
                component="h1"
                color="common.white"
                fontFamily={"'Bebas Neue'"}
                textAlign="center"
                fontSize={{xs:"48px", lg:"56px"}}
                fontWeight="thin"
                margin={-3}
                padding={0}
              >
                Javier Milei
              </Typography>
              <Typography
                margin={0}
                padding={0}
                component="p"
                variant="h1"
                color="common.white"
                fontFamily={"'Bebas Neue'"}
                textAlign="center"
                fontSize={{xs:"56px", lg:"72px"}}
              >
                Presidente
              </Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography
                component="p"
                variant="overline"
                color="common.white"
                textAlign="center"
                marginTop="-15px"
                marginBottom={{xs:"8px", lg:"14px"}}
                fontSize={{xs:"12px", lg:"18px"}}
              >
                Faltan
              </Typography>
              <TimerCounter date={new Date("2023-12-10T00:00:00.000-03:00")} />
            </m.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </MotionContainer>
  );
}
