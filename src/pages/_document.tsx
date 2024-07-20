import React, { ReactElement } from "react";
import {
  documentGetInitialProps,
  DocumentHeadTags,
} from "@mui/material-nextjs/v13-pagesRouter";
import {
  DocumentContext,
  DocumentInitialProps,
  DocumentProps,
  Html,
  Main,
  NextScript,
  Head,
} from "next/document";
import { DocumentHeadTagsProps } from "@mui/material-nextjs/v13-pagesRouter";
import { ServerStyleSheet } from "styled-components";

const Document = (props: DocumentProps & DocumentHeadTagsProps) => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

Document.getInitialProps = async (ctx: DocumentContext) => {
  const styledComponentsSheet = new ServerStyleSheet();

  try {
    return await documentGetInitialProps(ctx, {
      // emotionCache: createCustomCache(),
      plugins: [
        {
          enhanceApp: (App) => (props) =>
            styledComponentsSheet.collectStyles(<App {...props} />),
          resolveProps: async (initialProps: DocumentInitialProps) => ({
            ...initialProps,
            styles: [
              styledComponentsSheet.getStyleElement(),
              ...(initialProps.styles as ReactElement[]),
            ],
          }),
        },
      ],
    });
  } finally {
    styledComponentsSheet.seal();
  }
};

export default Document;
