import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra({
  // Ustawienie eksportu do statycznego folderu "out"
  output: "export",

  // Wyłączenie optymalizacji obrazów (konieczne przy eksporcie statycznym)
  images: {
    unoptimized: true,
  },

  // Opcje dotyczące przekierowań
  redirects: () => [
    {
      source: "/projekty",
      destination: "/projekty/uslugowe",
      permanent: true,
    },
  ],

  // Opcja trailingSlash pozwala generować URL z ukośnikiem na końcu
  trailingSlash: true,

  // Jeśli masz inne strony, które chcesz wyeksportować, użyj exportPathMap
  // exportPathMap: async function () {
  //   return {
  //     "/": { page: "/" },
  //     "/projekty": { page: "/projekty" },
  //     // Dodaj inne strony do eksportu, jeśli są dynamiczne lub statyczne
  //   };
  // },
});
