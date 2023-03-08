import { useRouter } from "next/router";
import { styled, useTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Container, Stack, Link } from "@mui/material";
import { useLocales, useOffSetTop, useResponsive } from "../../../hooks";
import { cssStyles } from "../../../utils";
import { HEADER } from "../../../config";
import { Logo } from "../../../components";
import { PATH_PAGE } from "@app/routes";

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);

  const theme = useTheme();

  const { translate } = useLocales();

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent", }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur({color:"#000000"}),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
            <Link href={PATH_PAGE.mission} variant="overline">{translate('planTitle')}</Link>
            <Logo />
            <Link href={PATH_PAGE.statistics} variant="overline">{translate('statisticsTitle')}</Link>
          {/* <Box sx={{ flexGrow: 1 }} /> */}

          {/* {isDesktop && <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />} */}

          {/* {!isDesktop && <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />} */}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
