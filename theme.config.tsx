import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
// import { useRouter } from "next/router";
// import { useConfig } from "nextra-theme-docs";
// import { Copy } from "./components/features/copy-page-url";
// import DocslyClient from "./components/DocslyClient";
// import AuthButton from "./auth-button";
import { Footer } from "./components/Homepage/Footer";

const config: DocsThemeConfig = {
  // banner: {
  //   key: 'Developer Kits',
  //   content: (
  //     <a href="https://developers.ledger.com/docs/news" target="_blank">
  //       🎉 New developers kits released. Read more →
  //     </a>
  //   )
  // },
  // project: {
  //   link: 'https://github.com/LedgerHQ/developer-portal',
  // },
  // chat: {
  //   link: 'https://discord.gg/Ledger',
  // },
  // docsRepositoryBase: "https://github.com/LedgerHQ/developer-portal/blob/main",
  footer: {
    content: "Duffla",
    component: () => (
      <>
        {/* Your footer code */}
        <Footer />
        {/* Removed the Docsly component: <DocslyClient /> */}
      </>
    ),
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  feedback: { content: null },
  editLink: { component: null },
  toc: {
    // extraContent: () => {
    //   return <Copy />;
    // },
    float: false,
  },
  head: function Head() {
    // const { asPath } = useRouter();
    // const config = useConfig();

    // const pageTitle = config.frontMatter.title || config.title;

    const siteTitle = "Duffla";
    const title = siteTitle;

    // const url = `https://developers.ledger.com${asPath}`;
    // const description =
    //   "All the tools and documentation," + "to integrate with Ledger";

    return (
      <>
        <title>{title}</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content={"Tworzymy przestrzeń, która inspiruje."}
        />
        <meta property="og:title" content={"Duffla.pl"} />
        <meta property="og:site_name" content={siteTitle} />
        <meta
          property="og:description"
          content={"Tworzymy przestrzeń, która inspiruje."}
        />
        {/* <meta property="og:url" content={url} /> */}
        <meta property="og:image" content="/compressed/uslugowe/meta3/4.jpg" />
        <meta property="og:locale" content="pl_PL" />
        {/* <link rel="canonical" href="https://developers.ledger.com" /> */}

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </>
    );
  },
  color: {
    hue: 35,
  },
  nextThemes: {
    forcedTheme: "dark",
  },
  darkMode: false,
  logo: (
    <>
      <img
        src={`/icons/Duffla.svg`}
        className=""
        style={{
          // minWidth: 80,
          maxWidth: 64,
        }}
        alt="logo icon"
      />
      {/* <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 22.9137V32H13.9173V29.9849H2.02778V22.9137H0ZM34.9722 22.9137V29.9849H23.0827V31.9995H37V22.9137H34.9722ZM13.9375 9.08631V22.9132H23.0827V21.0961H15.9653V9.08631H13.9375ZM0 0V9.08631H2.02778V2.01461H13.9173V0H0ZM23.0827 0V2.01461H34.9722V9.08631H37V0H23.0827Z" fill="currentColor"/>
      </svg> */}
      {/* <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Developer Portal
      </span> */}
    </>
  ),
  faviconGlyph: "🏘",
  // navbar: {
  //   // extraContent: <AuthButton />,
  // },
};

export default config;
