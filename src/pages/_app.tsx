import { MotionLazyContainer } from "@app/components";
import { SettingsProvider } from "@app/contexts";
import ThemeProvider from "@app/theme";
import { SettingsValueProps } from "@app/types";
import { NextPage } from "next";
import type { AppContext, AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import cookie from 'cookie';
import { getSettings } from "@app/utils";
import App from "next/app";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  settings: SettingsValueProps;
  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, settings } = props;

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SettingsProvider defaultSettings={settings}>
      <MotionLazyContainer>
        <ThemeProvider>
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </MotionLazyContainer>
    </SettingsProvider>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(
    context.ctx.req ? context.ctx.req.headers.cookie || '' : document.cookie
  );

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};