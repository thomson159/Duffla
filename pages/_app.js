import "../style/styles.css";
import "../style/form.css";
// import Script from "next/script";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
