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
    title: "PROJEKTY",
    href: "/projekty",
    items: {
      uslugowe: {
        type: "page",
        title: "USŁUGOWE",
        href: "/projekty/uslugowe",
      },
      przemyslowe: {
        type: "page",
        title: "PRZEMYSŁOWE",
        href: "/projekty/przemyslowe",
      },
      konserwatorskie: {
        type: "page",
        title: "KONSERWATORSKIE",
        href: "/projekty/konserwatorskie",
      },
      jednorodzinne: {
        type: "page",
        title: "JEDNORODZINNE",
        href: "/projekty/jednorodzinne",
      },
      wielorodzinne: {
        type: "page",
        title: "WIELORODZINNE",
        href: "/projekty/wielorodzinne",
      },
      wnetrza: {
        type: "page",
        title: "WNĘTRZA",
        href: "/projekty/wnetrza",
      },
      urbanistyka: {
        type: "page",
        title: "URBANISTYKA",
        href: "/projekty/urbanistyka",
      },
    },
  },
  kontakt: {
    type: "page",
    title: "KONTAKT",
    href: "/#kontakt",
  },  
};
