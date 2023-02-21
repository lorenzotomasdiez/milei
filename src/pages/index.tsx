import { Layout, Page } from "@app/components";
import { HomeSection } from "@app/sections";

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

export default function Home() {
  return (
    <Page title="Quotes">
      <HomeSection />
    </Page>
  )
}
