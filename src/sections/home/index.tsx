import { styled } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(10, 0),
}))

const HomeSection = () => {
  const [data, setData] = useState<any>(null);
  return (
    <RootStyle>
     
    </RootStyle>
  )
}

export default HomeSection

//api openai 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