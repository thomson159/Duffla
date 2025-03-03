export type FooterLinkType = {label: string, link: string, scrollLink: string | null}
export type FooterBlockType = {name: string, links: FooterLinkType[]}
export type FooterDataType = FooterBlockType[]

export const FooterData: FooterDataType = [
  {
    name: "Duffla.pl",
    links: [
      {
        label: "Home",
        link: "",
        scrollLink: "home",
      },
      {
        label: "Polityka Prywatności",
        link: "/policy",
        scrollLink: null,
      },
    ]
  },
  {
    name: "Kontakt",
    links: [
      {
        label: "📧 projekt@duffla.pl",
        link: "mailto:projekt@duffla.pl",
        scrollLink: null,
      },
      {
        label: "📞 +48 33 811 58 20",
        link: "tel:+48338115820",
        scrollLink: null,
      },
    ]
  },
  {
    name: "Projekty",
    links: [
      {
        label: "Usługowe",
        link: "/projekty/uslugowe",
        scrollLink: null,
      },
      {
        label: "Przemysłowe",
        link: "/projekty/przemyslowe",
        scrollLink: null,
      },
      {
        label: "Konserwatorskie",
        link: "/projekty/konserwatorskie",
        scrollLink: null,
      },
      {
        label: "Wielorodzinne",
        link: "/projekty/wielorodzinne",
        scrollLink: null,
      },
      {
        label: "Jednorodzinne",
        link: "/projekty/jednorodzinne",
        scrollLink: null,
      },
      {
        label: "Wnętrza",
        link: "/projekty/wnetrza",
        scrollLink: null,
      },
      {
        label: "Urbanistyka",
        link: "/projekty/urbanistyka",
        scrollLink: null,
      },
    ]
  },
  {
    name: "Wykonanie",
    links: [
      {
        label: "Web Crafty",
        link: "https://webcrafty.pl/",
        scrollLink: null,
      },
      {
        label: "Thomson",
        link: "https://thomson159.github.io/",
        scrollLink: null,
      },
    ]
  },
  // {
  //   name: "",
  //   links: [
  //     // {
  //     //   label: "Terms and Conditions",
  //     //   link: "https://shop.ledger.com/pages/terms-and-conditions",
  //     //   scrollLink: null,
  //     // },
  //     // {
  //     //   label: "polityka prywatności",
  //     //   link: "https://www.ledger.com/privacy-policy",
  //     //   scrollLink: null,
  //     // },
  //     // {
  //     //   label: "Cookie statement",
  //     //   link: "https://shop.ledger.com/pages/cookie-policy",
  //     //   scrollLink: null,
  //     // },
  //   ]
  // },
]
