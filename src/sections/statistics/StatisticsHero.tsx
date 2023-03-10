import React from 'react'
import { styled } from '@mui/material';

const RootStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  position: "relative",
  overflow: "hidden",
}));

const HeroOverlayStyle = styled('img')({
  zIndex: 9,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

const StatisticsHero = () => {
  return (
    <RootStyle>
      <HeroOverlayStyle
        alt="overlay"
        src="/assets/overlay.svg"
      />
    </RootStyle>
  )
}

export default StatisticsHero