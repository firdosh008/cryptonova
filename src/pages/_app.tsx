import React, { FC } from "react";
import { AppProps } from "next/app";
import { Source_Sans_3 } from "next/font/google";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { EmotionCache } from "@emotion/react";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "@/styles/globals.css";
import { wrapper } from "@/utils/redux";

const source_sans_3 = Source_Sans_3({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const theme: Theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: source_sans_3.style.fontFamily,
  },
});

const App: FC<AppProps & { emotionCache: EmotionCache }> = ({
  Component,
  emotionCache,
  pageProps,
}) => {
  return (
    <AppCacheProvider emotionCache={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
};

export default wrapper.withRedux(App);
