import { Card } from "@mui/material";
import { Stack, styled, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

const StackStyle = styled(Stack)(({theme}) => ({
  maxWidth:"500px",
  margin:"auto",
  [theme.breakpoints.up('lg')]:{
    maxWidth:"700px",
  }
}));

const CardStyle = styled(Card)(({ theme }) => ({
  position: "relative",
  minWidth: "80px",
  minHeight: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.common.black,
  borderRadius: "10px",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
  [theme.breakpoints.up('lg')]:{
    minWidth: "120px",
    minHeight: "120px",
  }
}));

const TypoStyle = styled(Typography)(({ theme }) => ({
  fontSize: "48px",
  fontWeight: "bold",
  fontFamily: "'Bebas Neue'",
  color: theme.palette.common.white,
  marginBottom:3,
  [theme.breakpoints.up('lg')]:{
    fontSize: "72px",
  }
}));

const FooterStyle = styled(Typography)(({theme}) => ({
  position:'absolute',
  bottom:5,
  color:theme.palette.common.white,
  fontSize: '12px',
  fontWeight: 'bold',
  [theme.breakpoints.up('lg')]:{
    fontSize: '16px',
  }
}));

interface Props {
  date: Date | string | number;
}

function toTimeFormat(num: number) {
  return num.toString().padStart(2, "0");
}

export default function TimerCounter({ date }: Props) {
  const timeToMs = useCallback((ms: number) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  }, []);

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    setTimeLeft(timeToMs(new Date(date).getTime() - new Date().getTime()));
    const interval = setInterval(() => {
      setTimeLeft(timeToMs(new Date(date).getTime() - new Date().getTime()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <StackStyle direction="row" justifyContent={"space-between"}>
      {timeLeft && (
        <>
          <CardStyle>
            <TypoStyle>{toTimeFormat(timeLeft.days)}</TypoStyle>
            <FooterStyle>Dias</FooterStyle>
          </CardStyle>
          <CardStyle>
            <TypoStyle>{toTimeFormat(timeLeft.hours)}</TypoStyle>
            <FooterStyle>Horas</FooterStyle>
          </CardStyle>
          <CardStyle>
            <TypoStyle>{toTimeFormat(timeLeft.minutes)}</TypoStyle>
            <FooterStyle>Minutos</FooterStyle>
          </CardStyle>
          <CardStyle>
            <TypoStyle>{toTimeFormat(timeLeft.seconds)}</TypoStyle>
            <FooterStyle>Segundos</FooterStyle>
          </CardStyle>
        </>
      )}
    </StackStyle>
  );
}
