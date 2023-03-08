import { Layout, Page } from "@app/components";
import { HomeHero, HomeVideoSpot, HomeMission } from "@app/sections";
import { styled } from "@mui/material";

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

export default function Home() {
  return (
    <Page title="Home">
      <HomeHero />
      <ContentStyle>
        <HomeMission />
        <HomeVideoSpot />
      </ContentStyle>
    </Page>
  )
}
