import { Layout, Page } from "@app/components";
import { useLocales } from "@app/hooks";
import { StatisticsHero } from "@app/sections";

Statistics.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

export default function Statistics() {
  const {translate} = useLocales();
  return (
    <Page title={translate('statisticsText')}>
      <StatisticsHero />
    </Page>
  )
}
