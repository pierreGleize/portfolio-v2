import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Head>
        <title>Portfolio / Developpeur / Pierre</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
