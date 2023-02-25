import { Layout, Page } from "@app/components";
import { HomeHero } from "@app/sections";

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

export default function Home() {
  return (
    <Page title="Home">
      <HomeHero />
    </Page>
  )
}
