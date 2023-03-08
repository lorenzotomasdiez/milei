import { Iconify } from "@app/components";
import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const RootStyle = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  position: "relative",
  minHeight: "100vh",
}));

const WhoOverlayStyle = styled("img")({
  zIndex: 9,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  opacity: 0.8,
});

const WhoVideoStyle = styled("video")(({ theme }) => ({
  display: "block",
  bottom: 0,
  zIndex: 8,
  height: "100vh",
  objectFit: "cover",

  position: "absolute",
  [theme.breakpoints.up("md")]: {
    display: "block",
    bottom: 0,
    zIndex: 8,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    margin: "auto",
    position: "absolute",
  },
}));

export default function HomeVideoSpot() {
  const [step, setStep] = useState(0);
  const handleVolume = () => {
    if (step === 2) {
      setStep(0);
    } else {
      setStep(2);
    }
  };
  return (
    <RootStyle>
      <WhoOverlayStyle alt="overlay" src="/assets/overlay.svg" />
      <WhoVideoStyle
        src="/assets/milei-spot.mp4"
        autoPlay={true}
        loop={true}
        muted={step === 0}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          marginBottom: 3,
          marginRight: 3,
          zIndex: 10,
        }}
      >
        <IconButton onClick={handleVolume}>
          {step === 0 && (
            <Iconify icon="eva:volume-off-fill" width="30px" height="30px" />
          )}
          {/* {
            step === 1 && (
              <Iconify icon="eva:volume-down-fill" width="30px" height="30px" />
            )
          } */}
          {step === 2 && (
            <Iconify
              icon="eva:volume-up-fill"
              width="30px"
              height="30px"
              color="white"
            />
          )}
        </IconButton>
      </Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: 10,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="h1"
          component="p"
          textAlign="center"
          color="common.white"
          fontFamily={"'Bebas Neue'"}
        >
          La única posibilidad de poner fin a más de 40 años de corrupción
        </Typography>
      </Box>
    </RootStyle>
  );
}
