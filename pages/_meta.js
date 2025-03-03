export default {
  index: {
    title: "Home",
    display: "hidden",
    theme: {
      layout: "raw",
    },
  },
  policy: {
    display: "hidden",
    href: "/policy",
  },
  projekty: {
    type: "menu",
    title: "Projekty",
    href: "/projekty",
    items: {
      uslugowe: {
        type: "page",
        title: "Usługowe",
        href: "/projekty/uslugowe",
      },
      przemyslowe: {
        type: "page",
        title: "Przemysłowe",
        href: "/projekty/przemyslowe",
      },
      konserwatorskie: {
        type: "page",
        title: "Konserwatorskie",
        href: "/projekty/konserwatorskie",
      },
      jednorodzinne: {
        type: "page",
        title: "Jednorodzinne",
        href: "/projekty/jednorodzinne",
      },
      wielorodzinne: {
        type: "page",
        title: "Wielorodzinne",
        href: "/projekty/wielorodzinne",
      },
      wnetrza: {
        type: "page",
        title: "Wnętrza",
        href: "/projekty/wnetrza",
      },
      urbanistyka: {
        type: "page",
        title: "Urbanistyka",
        href: "/projekty/urbanistyka",
      },
    },
  },
  kontakt: {
    type: "page",
    title: "Kontakt",
    href: "/#kontakt",
  },
  // 'dev-tracks': {
  //   type: 'page',
  //   title: 'Projekty',
  //   href: '/dev-tracks/quickstart'
  // },
  // docs: {
  //   type: 'menu',
  //   title: 'Projekty',
  //   items: {
  //     // 'news': {
  //     //   type: 'page',
  //     //   title: "What's new?",
  //     //   href: '/docs/news'
  //     // },
  //     'device-app': {
  //       title: 'OBIEKTY USŁUGOWE',
  //       href: '/docs/device-app/getting-started'
  //     },
  //     'device-interaction': {
  //       title: 'Device Interaction',
  //       href: '/docs/device-interaction/getting-started'
  //     },
  //     'ledger-live': {
  //       title: 'Ledger Live',
  //       href: '/docs/ledger-live/introduction'
  //     },
  //     'clear-signing': {
  //       title: 'Clear Signing',
  //       href: '/docs/clear-signing/getting-started'
  //     }
  //   }
  // }
};
