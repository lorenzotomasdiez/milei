// scroll bar
import "simplebar/dist/simplebar.css";
import "../styles/styles.css";
import { MotionLazyContainer } from "@app/components";
import { SettingsProvider } from "@app/contexts";
import ThemeProvider from "@app/theme";
import { SettingsValueProps } from "@app/types";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { getSettings } from "@app/utils";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  settings: SettingsValueProps;
  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, settings = getSettings({}) } = props;

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
