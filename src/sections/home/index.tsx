import { styled } from "@mui/material";
import { ZenService } from "@app/services/forismatic";
import { useEffect, useState } from "react"

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(10, 0),
}))

const HomeSection = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    // new ZenService().get().then(res => console.log(res));
    fetch('https://zenquotes.io/api/quotes').then(res => console.log(res));
  },[])
  return (
    <RootStyle>
      {/* {
        data && (
          JSON.stringify(data)
        )
      } */}
    </RootStyle>
  )
}

export default HomeSection