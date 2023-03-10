import { Layout, Page } from "@app/components";
import { useLocales } from "@app/hooks";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";

Mission.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

const RootStyle = styled('div')(({theme}) => ({
  minHeight:'100vh',
  postion:'relative',
}))

export default function Mission() {
  const {translate} = useLocales();
  return (
    <Page title="Mission">
      <RootStyle>
        <Box sx={{
          textAlign:'center',
          position:'absolute',
          top:'50%',
          left:'50%',
          transform:'translate(-50%, -50%)'
        }}>
          <Typography component="h1" variant="h1" fontFamily="'Bebas Neue'">
            {translate('comingSoon')}
          </Typography>
          <Typography component="h2" variant="h2" fontFamily="'Bebas Neue'">
            {translate('beingBuilt')}
          </Typography>
        </Box>
      </RootStyle>
    </Page>
  )
}
